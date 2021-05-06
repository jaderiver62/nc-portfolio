import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import NinaResume from "../../assets/resume/nina-cummings.pdf";

function Resume() {
	const [proficiencies] = useState({
		front: [
			"Javascript", "React", "jQuery", "Bootstrap", "Bulma", "Handlebars", "HTML", "CSS"
		]
		,
		back: [
			"Java", "Python", "MongoDB / Mongoose", "MySQL / Sequelize", "Node.js", "Express", "REST APIs", "Jest"
		]
	});

	return (
		<div className="resume-section">
			<Row>
				<Col className="prof-section" sm="12" md="6">
					<div>
						<h2>Back-End:</h2>
						<ul>
							{proficiencies.back.map(prof => <li key={prof}>{prof}</li>)}
						</ul>
					</div>
				</Col>
				<Col className="prof-section" sm="12" md="6">
					<div>
						<h2>Front-End:</h2>
						<ul>
							{proficiencies.front.map(prof => <li key={prof}>{prof}</li>)}
						</ul>
					</div>
				</Col>
			</Row>
			<div >
				<br />
				<h1>Please checkout my <a href={NinaResume} target="_blank" rel="noreferrer">Resume</a>! </h1>
			</div>
		</div>
	);
}

export default Resume;