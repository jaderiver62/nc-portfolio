
import React, { useState } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption, Card, CardImg, CardText,
	CardTitle, CardSubtitle, CardLink, Row, Col
} from 'reactstrap';
import amanuensis from "../../assets/portfolio/amanuensis2.png";
import apparatus from "../../assets/portfolio/apparatus2.png";
import liaison from "../../assets/portfolio/liaison2.png";
import passwordGenerator from "../../assets/portfolio/password-generator2.png";
import prosperity from "../../assets/portfolio/prosperity2.png";
import safePassage from "../../assets/portfolio/safe-passage2.png";
import scheduler from "../../assets/portfolio/scheduler2.png";
import weatherBee from "../../assets/portfolio/weather-bee2.png";
import workbase from "../../assets/portfolio/workbase2.png";
import wikipleiades from "../../assets/portfolio/wikipleiades2.png";


const items = [
	{
		src: amanuensis,
		altText: 'WikiPleiades',
		caption: '✹ Space Wiki',
		link: 'https://enigmatic-savannah-82928.herokuapp.com/'
	},
	{
		src: amanuensis,
		altText: 'Amanuensis',
		caption: '✹ App for taking notes',
		link: 'https://sheltered-crag-78743.herokuapp.com/'
	},
	{
		src: apparatus,
		altText: 'Apparatus',
		caption: '✹ Tech Blog Site',
		link: 'https://quiet-ocean-12254.herokuapp.com/'
	},
	{
		src: liaison,
		altText: 'Liaison',
		caption: '✹ App for organizing teams',
		link: 'https://github.com/jaderiver62/liaison'
	},
	{
		src: passwordGenerator,
		altText: 'Password Generator',
		caption: '✹ Helper App',
		link: 'https://jaderiver62.github.io/password-generator/'
	},
	{
		src: prosperity,
		altText: 'Prosperity',
		caption: '✹ Budget Tracking App',
		link: 'https://serene-everglades-38825.herokuapp.com/'
	},
	{
		src: safePassage,
		altText: 'Safe Passage',
		caption: '✹ Air Quality/Covid-19 Tracker',
		link: 'https://jaderiver62.github.io/safe-passage/'
	},
	{
		src: scheduler,
		altText: 'Work Day Scheduler',
		caption: '✹ Keep your schedule organized',
		link: 'https://jaderiver62.github.io/work-day-scheduler/'
	},
	{
		src: weatherBee,
		altText: 'WeatherBee',
		caption: '✹ Ad-Free Weather App',
		link: 'https://jaderiver62.github.io/weather-bee/'
	},
	{
		src: workbase,
		altText: 'WorkBase',
		caption: '✹ Employee Database Builder',
		link: 'https://github.com/jaderiver62/workbase'
	}

];
function Portfolio(props) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	}

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	}

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	}

	const slides = items.map((item) => {
		return (

			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.link}
			>
				<a href={item.link} rel="noreferrer" target="_blank"><img src={item.src} alt={item.altText} /></a>

				<CarouselCaption captionText={item.caption} alt={item.altText} captionHeader={item.altText} />
			</CarouselItem>
		);
	});


	return (
		<div className="portfolio-page">
			<div className="portfolio-header">
				<h1>My Portfolio</h1>
				<br />
			</div>
			<Carousel
				activeIndex={activeIndex}
				next={next}
				previous={previous}
			>
				<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
				{slides}
				<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
				<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
			</Carousel>
			<div className="carousel-subtitle">
				Click an image to see a sample of my work
			</div>
			<div>
				<h2 className="portfolio-header">Here is a selection of my projects:</h2>
				<br />
				<br />
				<div>
					<Row className="justify-content-center">
						<Col className="card-col" xs="12" sm="12" md="8" lg="4" xl="4">
							<CardImg top width="100%" src={wikipleiades} alt="safe-passage" />
							<Card body className="card-style">
								<CardTitle tag="h5">WikiPleiades</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">Space Wiki</CardSubtitle>
								<CardText>Create, read and edit articles about space and physics.  Keeps track of all revisions and has a random feature!</CardText>
								<CardLink href="https://enigmatic-savannah-82928.herokuapp.com/">Visit Site</CardLink>
								<br />
								<CardLink href="https://github.com/akramsabbah9/wikipleiades">GitHub</CardLink>
							</Card>
						</Col>
						<Col className="card-col" xs="12" sm="12" md="8" lg="4" xl="4">
							<CardImg top width="100%" src={amanuensis} alt="amanuensis" />
							<Card body className="card-style">
								<CardTitle tag="h5">Amanuensis</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">App for taking notes</CardSubtitle>
								<CardText>This App is great for creating, saving and deleting notes at your leisure!  The notes are stored in local storage.</CardText>
								<CardLink href="https://sheltered-crag-78743.herokuapp.com/">Visit Site</CardLink>
								<br />
								<CardLink href="https://github.com/jaderiver62/amanuensis">GitHub</CardLink>
							</Card>
						</Col>
						<Col className="card-col" xs="12" sm="12" md="8" lg="4" xl="4">
							<CardImg top width="100%" src={apparatus} alt="apparatus" />
							<Card body className="card-style">
								<CardTitle tag="h5">Apparatus</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">Tech Blog Site</CardSubtitle>
								<CardText>A blog site that anyone can join to post their thoughts about a variety of tech subjects!  Users can post and comment.</CardText>
								<CardLink href="https://quiet-ocean-12254.herokuapp.com/">Visit Site</CardLink>
								<br />
								<CardLink href="https://github.com/jaderiver62/apparatus">GitHub</CardLink>
							</Card>
						</Col>
						<Col className="card-col" xs="12" sm="12" md="8" lg="4" xl="4">
							<CardImg top width="100%" src={liaison} alt="amanuensis" />
							<Card body className="card-style">
								<CardTitle tag="h5">Liaison</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">Team Organization</CardSubtitle>
								<CardText>Create a team dashboard in the command line to keep track of current information.</CardText>
								<CardLink href="https://jaderiver62.github.io/liaison/src/dist/">Output Example</CardLink>
								<br />
								<CardLink href="https://github.com/jaderiver62/liaison">GitHub</CardLink>
							</Card>
						</Col>
						<Col className="card-col" xs="12" sm="12" md="8" lg="4" xl="4">
							<CardImg top width="100%" src={passwordGenerator} alt="password generator" />
							<Card body className="card-style">
								<CardTitle tag="h5">Password Generator</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">Generate an encrypted password</CardSubtitle>
								<CardText>This App make it easy to use secure passwords without having to do much!</CardText>
								<CardLink href="https://jaderiver62.github.io/password-generator/">Visit Site</CardLink>
								<br />
								<CardLink href="https://github.com/password-generator">GitHub</CardLink>
							</Card>
						</Col>
						<Col className="card-col" xs="12" sm="12" md="8" lg="4" xl="4">
							<CardImg top width="100%" src={prosperity} alt="prosperity" />
							<Card body className="card-style">
								<CardTitle tag="h5">Prosperity</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">A Budget Tracker</CardSubtitle>
								<CardText>Keep track of your budget in this simple app that stores your information and displays trends in a chart</CardText>
								<CardLink href="https://jaderiver62.github.io/prosperity-app/">Visit Site</CardLink>
								<br />
								<CardLink href="https://serene-everglades-38825.herokuapp.com/">GitHub</CardLink>
							</Card>
						</Col>
						<Col className="card-col" xs="12" sm="12" md="8" lg="4" xl="4">
							<CardImg top width="100%" src={safePassage} alt="safe-passage" />
							<Card body className="card-style">
								<CardTitle tag="h5">Safe Passage</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">Air Quality/Covid-19 Tracker</CardSubtitle>
								<CardText>Get up to date air-quality information and Covid-19 reports for the US.</CardText>
								<CardLink href="https://jaderiver62.github.io/safe-passage/">Visit Site</CardLink>
								<br />
								<CardLink href="https://jaderiver62.github.io/safe-passage/">GitHub</CardLink>
							</Card>
						</Col>
						<Col className="card-col" xs="12" sm="12" md="8" lg="4" xl="4">
							<CardImg top width="100%" src={scheduler} alt="safe-passage" />
							<Card body className="card-style">
								<CardTitle tag="h5">Work Day Scheduler</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">Keep your schedule organized</CardSubtitle>
								<CardText>An app to plan your day with ease.</CardText>
								<CardLink href="https://jaderiver62.github.io/work-day-scheduler/">Visit Site</CardLink>
								<br />
								<CardLink href="https://jaderiver62.github.io/work-day-scheduler/">GitHub</CardLink>
							</Card>
						</Col>
						<Col className="card-col" xs="12" sm="12" md="8" lg="4" xl="4">
							<CardImg top width="100%" src={weatherBee} alt="safe-passage" />
							<Card body className="card-style">
								<CardTitle tag="h5">Weather-Bee</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">Add-Free Weather</CardSubtitle>
								<CardText>Search for a 5-day forecast for anywhere on the globe!</CardText>
								<CardLink href="https://jaderiver62.github.io/weather-bee/">Visit Site</CardLink>
								<br />
								<CardLink href="https://jaderiver62.github.io/weather-bee/">GitHub</CardLink>
							</Card>
						</Col>
						<Col className="card-col" xs="12" sm="12" md="8" lg="4" xl="4">
							<CardImg top width="100%" src={workbase} alt="safe-passage" />
							<Card body className="card-style">
								<CardTitle tag="h5">WorkBase</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">Employee Database Builder</CardSubtitle>
								<CardText>Build a database to store information about employees and managers.  Very customizable!</CardText>
								<CardLink href=" https://github.com/jaderiver62/workbase">GitHub</CardLink>
							</Card>
						</Col>

					</Row>
				</div>
			</div>
		</div>
	);
}
//
export default Portfolio;