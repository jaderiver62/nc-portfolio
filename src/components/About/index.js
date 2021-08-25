// About Me component
import React from 'react';
import ninaImage from "../../assets/about-me/nina-cummings.png";
import divider from "../../assets/about-me/divider.png";
// <img src={ninaImage} style={{ width: "15%", padding: "40px" }} alt="Nina" className="nina-pic" />


function About() {
	return (
		<section className="page">
			
			<div>
				<br /><br />

					<h1>About Me</h1>
				<p>
					<br />
					Hello!
					<br />
					My name is Kristina Cummings, but I use my childhood nickname Nina.
					<br />
					I have been coding now for several years and have only become more fascinated with time.
					My primary goal is to continue to learn new technologies and develop my skills so that I can ultimately contribute to meaningful projects.
					<br />
					
					Most recently, I completed a coding boot camp cohort at UC Berkeley Extension for Full Stack Web Development.
					<br />
					My plan is to transfer from City College of San Francisco to the University of Minnesota for a double major BS in Computer Science and Mathematics.
					<br />
					This career path is my passion right now, so I am dedicated to creating new and innovative projects in the future!
					<br /><br />
					Thank you for taking the time to review my work!
					<br /><br />
					Watch this space...
				</p><br />
				<br />

			</div>

		</section>
	);
}
// <img src={divider} style={{ width: "55%" }} alt="divider" className="divider" />
export default About;
