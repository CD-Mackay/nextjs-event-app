import Link from 'next/link';
import classes from './eventListItem.module.css';

function EventListItem({ event }) {
  const { title, image, date, location, id } = event;

  const renderedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(', ', '\n');

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt="image" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{renderedDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventListItem;
