import { useRouter } from 'next/router';
import { getEventById } from '../../data/dummy-data';

function SingleEventPage() {
  const router = useRouter();

  router.query;

  const eventId = router.query.eventId;

  const event = getEventById(eventId)

  if (!event) {
    return <p>No Event Found</p>
  }

  return (
    <div>
      <h1>I am SingleEventPage</h1>
    </div>
  )
};

export default SingleEventPage;