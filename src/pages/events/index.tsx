import events from "./events.json";

const EventsPage = () => {
	return (
		<>
			<h1>Hello Events Page!</h1>
			<ul>
				{events.map((event) => {
					return (
						<li key={event.id}>
							<a href={`/events/${event.id}`}>{event.title}</a>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default EventsPage;
