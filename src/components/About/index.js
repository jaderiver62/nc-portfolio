
import React from 'react';
import ninaImage from "../../assets/about-me/nina-cummings.jpg";
//TODO: Style this

function About() {
	return (
		<section>
		<img src={ninaImage} className="my-2" style={{ width: "20%" }} alt="Nina" />
			<div class="headers">
				<h1>About Me</h1>
			</div>
			<div class="paragraphs">
				Greetings!

				I am Nina, a humble Baker by day.  In my spare time, however, I am an eager student of coding.  
				
				My goal is to continue to learn more about development every day, and my work will reflect my endeavors.
				
				In the broad scheme of things, I am studying computer science and mathematics at the University of Minnesota.  
				
				Most recently, I have been attending a coding boot camp cohort at UC Berkeley Extension for Full Stack Web Development.

				I have been coding for several years now, primarily in Java, Python and most recently in JavaScript.   
				
				Sincerely, I love to code.

				Watch this space...
		</div>
		</section>
	);
}

export default About;