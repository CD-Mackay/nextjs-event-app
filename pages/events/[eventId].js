import { Fragment } from "react";
import EventSummary from "../../components/event-details/event-summary";
import EventLogistics from "../../components/event-details/event-logistics";
import EventContent from "../../components/event-details/event-content";
import { getAllEvents, getEventById } from '../../helpers/api-utils';

function SingleEventPage(props) {
  const event = props.event;


  if (!event) {
    return <p>No Event Found</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 120,
  }
};

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map(event => ({ params: { eventId: event.id }}));
    return {
    paths: paths,
    fallback: false
  };
}

export default SingleEventPage;
