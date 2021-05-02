
import React from 'react';
import ninaImage from "../../assets/about-me/nina-cummings.jpg";
import divider from "../../assets/about-me/divider.png";

//TODO: Style this

function About() {
	return (
		<section class="about">
			<img src={ninaImage} style={{ /*width: "15%",*/ padding:"60px" }} alt="Nina" class="nina-pic" />
			<div>
				<h1>About Me</h1>
				<img src={divider} style={{ width: "10%"}} alt="divider" />
				<p>
				Greetings!

				I am Nina, a humble Baker by day.  In my spare time, however, I am an eager student of coding.  
				
				My goal is to continue to learn more about development every day, and my work will reflect my endeavors.
				
				In the broad scheme of things, I am studying computer science and mathematics at the University of Minnesota.  
				
				Most recently, I have been attending a coding boot camp cohort at UC Berkeley Extension for Full Stack Web Development.

				I have been coding for several years now, primarily in Java, Python and most recently in JavaScript.   
				
				Sincerely, I love to code.

				Watch this space...
				</p>
		</div>
		</section>
	);
}

export default About;