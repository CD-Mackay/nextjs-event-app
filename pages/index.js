import { getFeaturedEvents } from '../data/dummy-data';
import EventList from '../components/events/eventList';

function HomePage() {

  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>I am Home</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export default HomePage;
