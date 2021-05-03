
import React from 'react';
import ninaImage from "../../assets/about-me/nina-cummings.png";
import divider from "../../assets/about-me/divider.png";
import divider2 from "../../assets/about-me/divider-2.png";

//TODO: Style this

function About() {
	return (
		<section class="about">
			<img src={ninaImage} style={{ /*width: "15%",*/ padding: "40px" }} alt="Nina" class="nina-pic" />
			<div>
				<br /><br />
				<p>
					<h1>About Me</h1>

					<img src={divider2} style={{ width: "20%" }} alt="divider" class="divider2" />
					<br />
					Greetings!
					<br />
					<br />
					I am Nina, a humble baker by day.
						<br />
					However, in my spare time I am an eager student of coding!
					<br />
					My primary goal is to continue to learn more about development every day, and my work will reflect my endeavors.
					<br />
					In the broad scheme of things, I am studying computer science and mathematics at the University of Minnesota.
					<br />
					Most recently, I have been attending a coding boot camp cohort at UC Berkeley Extension for Full Stack Web Development.
					<br />
					I have been coding now for several years and have only become more fascinated with time.
					<br />
					While you're here, be sure to check out my work!  feel free to use the contact page for questions, inqueries, input or anything else you would like to share!
					<br />
					Thank you for your time.
					<br/>
					Sincerely, I love to code!
					<br />
					<br />
					Watch this space...
				</p><br />
				<br />
				<img src={divider} style={{ width: "52%" }} alt="divider" class="divider" />
			</div>

		</section>
	);
}

export default About;