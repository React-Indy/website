import Image from "next/image";
import classNames from "classnames";
import heroImage from "../../public/hero.png";
import styles from "./index.module.css";

const CODE_OF_CONDUCT_LINK =
	"https://docs.google.com/document/d/e/2PACX-1vQf_7z4Ok-zyUY9vej4ZDafitByM6TOuZ8ju2rcEdEuKtuTYYrtDNjjw0EZRmt9pVQ2k7PqghYf16-F/pub";

const HomePage = () => {
	return (
		<div className={styles.root}>
			<header className={styles.header}>
				<Image
					alt="logo"
					src={heroImage}
				/>
			</header>
			<main className={classNames("flow", styles.main)}>
				<h1>Hello, world!</h1>
				<h2>What we&apos;re about</h2>
				<p>
					<strong>React.Indy</strong> is an Indianapolis-based group for anyone
					interested in React, React Native, React frameworks (like Next.js),
					JavaScript, TypeScript, or front-end engineering. It doesn&apos;t
					matter if you don&apos;t know anything about React, don&apos;t use it
					every day, or are early in your web development career.{" "}
					<strong>Everyone is welcome.</strong>
				</p>
				<p>
					All organizers and members of <strong>React.Indy</strong>, as well as
					any attendees of its events, are required to agree with the{" "}
					<a href={CODE_OF_CONDUCT_LINK}>code of conduct</a>.
				</p>
				<p>
					The quick version: <strong>React.Indy</strong> is dedicated to
					providing a harassment-free experience for everyone, regardless of
					gender, gender identity and expression, age, sexual orientation,
					disability, physical appearance, body size, race, ethnicity, religion
					(or lack thereof), or technology choices. We do not tolerate
					harassment of event participants or group members in any form.
				</p>
			</main>
			<footer className={styles.footer}>
				<div>
					<p>&copy; 2024 React.Indy</p>
				</div>
			</footer>
		</div>
	);
};

export default HomePage;
