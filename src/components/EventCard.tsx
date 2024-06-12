import styles from "../css/EventCard.module.css";
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";

const EventCard = ({ title, startDateTime, location }) => {
	return (
		<div className={`${styles["event-card"]}`}>
			<div className={`${styles["left-container"]}`}>
				<div className={`${styles["date-container"]}`}>
					<time dateTime="MM-DD">Month Day</time>
				</div>
			</div>
			<div className={`${styles["right-container"]}`}>
				<h2>{title}</h2>
				<div className={`${styles["meeting-time-container"]}`}>
					<div className={`${styles["icon-container"]}`}>
						<ClockIcon className={`${styles["meeting-time-icon"]}`} />
					</div>
					<time dateTime="YYYY-MM-DD HH:MM">
						Formatted startDateTime from props
					</time>
				</div>
				<div className={`${styles["meeting-location-container"]}`}>
					<div className={`${styles["icon-container"]}`}>
						<MapPinIcon className={`${styles["meeting-location-icon"]}`} />
					</div>
					<p>{location}</p>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
