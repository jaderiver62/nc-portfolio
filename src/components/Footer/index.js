// Footer Component in Reactstrap with a fixed-bottom
import React from "react";
import {  Row, Col } from 'reactstrap';

import github from "../../assets/footer/github.png";
import stackOverflow from "../../assets/footer/stackoverflow.png";
import linkedin from "../../assets/footer/linkedin.png";
import twitter from "../../assets/footer/twitter.png";




//TODO: build footer with icon links & style

function Footer() {
	return (<footer className="fixed-bottom navbar d-flex ">
		<Row>
			<Col>
				<a className="navbar-brand left" href="https://github.com/jaderiver62">
					<img src={github} style={{ width: "25%" }} alt="github" />
				</a>
			</Col>
			<Col>
				<a className="navbar-brand" href="https://stackoverflow.com/users/14499245/nina-cummings">
					<img src={stackOverflow} style={{ width: "25%" }} alt="stack overflow" />

				</a>
			</Col>
			<Col>
				<a className="navbar-brand" href="https://www.linkedin.com/in/nina-cummings-7b5a381b8/" >
					<img src={linkedin} style={{ width: "25%" }} alt="linked in" />
				</a>
			</Col>
			<Col>

				<a className="navbar-brand" href="https://twitter.com/Nina15725889">
					<img src={twitter} style={{ width: "45%" }} alt="twitter" />
				</a>
			</Col>
		</Row>
	</footer>);
}

export default Footer;
