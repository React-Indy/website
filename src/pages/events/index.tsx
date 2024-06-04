import { getSortedEventsData } from "../../../lib/getEventsData";
import EventsList from "components/EventsList";

//Use next.js fetching method getStaticProps() to add the events data to the page
export async function getStaticProps() {
	const allEventsData = getSortedEventsData();
	return {
		props: { allEventsData },
	};
}

const EventsPage = ({ allEventsData }) => {
	return (
		<div className="eventsPage">
			<EventsList events={allEventsData}></EventsList>
		</div>
	);
};

export default EventsPage;
