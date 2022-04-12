import EventList from "../../components/events/eventList";
import { useRouter } from 'next/router';
import EventsSearch from "../../components/events/eventsSearch";
import { getAllEvents } from '../../helpers/api-utils';

function EventsPage(props) {
  const { events } = props;
  const router = useRouter();

  function searchHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <div>
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
    revalidate: 60
  }
}

export default EventsPage;
