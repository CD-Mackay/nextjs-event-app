import EventList from "../../components/events/eventList";
import EventsSearch from "../../components/events/eventsSearch";
import { getAllEvents } from "../../data/dummy-data";

function EventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventsSearch />
      <EventList events={events} />
    </div>
  );
}

export default EventsPage;
