import EventList from "../../components/events/eventList";
import { useRouter } from "next/router";
import EventsSearch from "../../components/events/eventsSearch";
import { getAllEvents } from "../../helpers/api-utils";
import Head from "next/head";

function EventsPage(props) {
  const { events } = props;
  const router = useRouter();

  function searchHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <div>
      <Head>
        <title>Events App</title>
        <meta name="description" content="find Alot of great events" />
      </Head>
      <EventsSearch onSearch={searchHandler} />
      <EventList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default EventsPage;
