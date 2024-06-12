import { getSortedEventsData } from "../../../lib/getEventsData";
import EventsList from "components/EventsList";
import Head from "next/head";

//Use next.js fetching method getStaticProps() to add the events data to the page
export async function getStaticProps() {
	const allEventsData = getSortedEventsData();
	return {
		props: { allEventsData },
	};
}

const EventsPage = ({ allEventsData }) => {
	return (
		<>
			<Head>
				<title>React Indy | Events </title>
				<meta
					name="keywords"
					content="events"
				/>
			</Head>
			<div className="eventsPage">
				<h1>Events Page</h1>
				<EventsList events={allEventsData}></EventsList>
			</div>
		</>
	);
};

export default EventsPage;
