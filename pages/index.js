import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/events/eventList';

function HomePage(props) {


  return (
    <div>
      <h1>I am Home</h1>
      <EventList events={props.featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {

  const featuredEvents = await getFeaturedEvents();
  
  return {
    props: {
      featuredEvents,
    }
  }
}

export default HomePage;
