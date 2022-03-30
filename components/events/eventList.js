import EventListItem from "./eventListItem";
import classes from './eventList.module.css';

function EventList({events}) {

  console.log(classes);

  return (
      <ul className={classes.list} >
        {events.map((event) => {
          return <EventListItem event={event} key={event.id} />
        })}
      </ul>
  )
};

export default EventList;