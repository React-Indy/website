import styles from "../css/EventsList.module.css";

import EventCard from "./EventCard";

const EventsList = ({ events }) => {
	return (
		<ul className={`${styles["events-list"]}`}>
			{events.map((event) => (
				<li
					className={`${styles["list-item"]}`}
					key={event.slug}
				>
					<EventCard
						title={event.title}
						startDateTime={event.startDateTime}
						location={event.location}
					/>
				</li>
			))}
		</ul>
	);
};

export default EventsList;
