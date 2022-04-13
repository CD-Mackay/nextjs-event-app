import { useRouter } from "next/router";
import EventListItem from "../../components/events/eventListItem";
import EventList from "../../components/events/eventList";
import ResultsTitle from "../../components/events/results-title";
import { Fragment, useEffect, useState } from "react";
import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../helpers/api-utils";
import useSWR from "swr";

function FilteredEventsPage(props) {
  const router = useRouter();

  const [events, setEvents] = useState();
  const filterData = router.query.slug;

  const { data, error } = useSWR("https://nextjs-section5-e6020-default-rtdb.firebaseio.com/events.json");

  useEffect(() => {
    if (data) {
      const finalEvents = [];

      for (const key in data) {
        finalEvents.push({
          id: key,
          ...data[key],
        });
      }
    }
    setEvents(finalEvents);
   }, [data]);

  if (!filterData || !events) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }

  const year = filterData[0];
  const month = filterData[1];
  const numYear = +year;
  const numMonth = +month;


  if (props.hasError) {
    return (
      <Fragment>
        <p>Invalid Filter!</p>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <p>No Events Found</p>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const year = filterData[0];
  const month = filterData[1];
  const numYear = +year;
  const numMonth = +month;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}

export default FilteredEventsPage;
