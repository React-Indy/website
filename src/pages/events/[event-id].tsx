import {
	GetStaticPathsResult,
	GetStaticPropsContext,
	GetStaticPropsResult,
} from "next";
import events from "./events.json";

const EventPage = (pageProps) => {
	const event = pageProps.event;

	return (
		<>
			<h1>{event.title}</h1>
		</>
	);
};

const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
	return {
		paths: events.map((event) => {
			return `/events/${event.id}`;
		}),
		fallback: false,
	};
};

const getStaticProps = async (
	context: GetStaticPropsContext,
): Promise<
	GetStaticPropsResult<{
		event: {
			title: string;
		};
	}>
> => {
	const eventId = context.params["event-id"];
	const event = events.find((item) => {
		return item.id === eventId;
	});

	return {
		props: {
			event,
		},
	};
};

export { getStaticPaths, getStaticProps };
export default EventPage;
