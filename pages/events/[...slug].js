import { getFilteredEvents } from "../../data/dummy-data";
import { useRouter } from "next/router";
import EventListItem from "../../components/events/eventListItem";
import EventList from "../../components/events/eventList";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <div>
        <h1>I am FilteredEventsPage</h1>
      </div>
    );
  }

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
    return <p>Invalid Filter!</p>
  };

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No Events Found</p>
  }

  return (
    <div>
      <EventList events={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;
