import EventList from "../../components/events/eventList";
import { getAllEvents } from "../../data/dummy-data";

function EventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

export default EventsPage;
