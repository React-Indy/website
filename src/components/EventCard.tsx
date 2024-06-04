import styles from "../css/EventCard.module.css";

const EventCard = ({ title, startDateTime, location }) => {
	return (
		<div className={`${styles["event-card"]}`}>
			<div className={`${styles["left-container"]}`}>
				<div className={`${styles["date-container"]}`}>
					<h3>Date</h3>
				</div>
			</div>
			<div className={`${styles["right-container"]}`}>
				<h2>{title}</h2>
				<div className={`${styles["meeting-time-container"]}`}>
					<div className={`${styles["icon-container"]}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className={`${styles["meeting-time-icon"]}`}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					</div>
					<p>{startDateTime}</p>
				</div>
				<div className={`${styles["meeting-location-container"]}`}>
					<div className={`${styles["icon-container"]}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className={`${styles["meeting-location-icon"]}`}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
							/>
						</svg>
					</div>
					<p>{location}</p>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
