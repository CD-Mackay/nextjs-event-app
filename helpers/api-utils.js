export async function getAllEvents() {
  const events = await fetch('https://nextjs-section5-e6020-default-rtdb.firebaseio.com/events.json');
  const data = await events.json();
  const finalEvents = [];

  for (const key in data) {
    finalEvents.push({
      id: key,
      ...data[key],
    })
  };

  return finalEvents;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
};


export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}