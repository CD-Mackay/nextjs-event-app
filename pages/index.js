import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/events/eventList';
import Head from 'next/head';

function HomePage(props) {


  return (
    <div>
      <Head>
        <title>Events App Home</title>
      </Head>
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
    },
    revalidate: 1200,
  }
}

export default HomePage;
