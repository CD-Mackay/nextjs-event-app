import DateIcon from "../icons/dateIcon";
import LocationIcon from "../icons/locationIcon";
import Button from "../ui/button";
import classes from "./eventListItem.module.css";
import Image from 'next/image';

function EventListItem({ event }) {
  const { title, image, date, location, id } = event;

  const renderedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className={classes.item}>
      <Image src={"/" + image} alt="image" width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{renderedDate}</time>
          </div>
          <div className={classes.address}>
            <LocationIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Events</span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventListItem;
