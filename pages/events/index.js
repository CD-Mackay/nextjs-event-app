import EventList from "../../components/events/eventList";
import { useRouter } from 'next/router';
import EventsSearch from "../../components/events/eventsSearch";
import { getAllEvents } from "../../data/dummy-data";

function EventsPage() {
  const events = getAllEvents();
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

export default EventsPage;
