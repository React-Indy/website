import fs from "fs";
import path from "path";
import matter from "gray-matter";

const eventsDirectory = path.join(process.cwd(), "test-data");

// Return a sorted array containing an object for each unique event
export function getSortedEventsData() {
	// Get file names for each unique event's markdown file
	const fileNames = fs.readdirSync(eventsDirectory);

	const allEventsData = fileNames.map((fileName) => {
		// Read each unique event's markdown file as a string

		const fullPath = path.join(eventsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		//Use gray-matter library to parse the event's YAML front matter
		const matterResult = matter(fileContents);

		// Copy parsed data into an object for each event
		return {
			...matterResult.data,
		};
	});

	// Sort the ISO dates lexographically
	// Reference: https://stackoverflow.com/questions/12192491/sort-array-by-iso-8601-date
	return allEventsData.sort((a, b) => {
		a.startDateTime < b.startDateTime
			? -1
			: a.startDateTime > b.startDateTime
				? 1
				: 0;
	});
}
