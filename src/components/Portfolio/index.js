
import React, { useState } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption, Row
} from 'reactstrap';
import Project from "../Project";
import amanuensis from "../../assets/portfolio/amanuensis2.png";
import apparatus from "../../assets/portfolio/apparatus2.png";
import prosperity from "../../assets/portfolio/prosperity2.png";
import safePassage from "../../assets/portfolio/safe-passage2.png";
import scheduler from "../../assets/portfolio/scheduler2.png";
import weatherBee from "../../assets/portfolio/weather-bee2.png";
import wikipleiades from "../../assets/portfolio/wikipleiades2.png";
import blather from "../../assets/portfolio/blather-screenshot.png";


const items = [
	
	{
		src: blather,
		altText: 'Blather',
		caption: 'blabathons',
		link: 'https://blather-blab.herokuapp.com/',
		description: 'A social app for blabbing, making friends and posting random images!',
		github: 'https://github.com/ohwhytina/blather'
	},
	{
		src: wikipleiades,
		altText: 'WikiPleiades',
		caption: 'Space Wiki',
		link: 'https://enigmatic-savannah-82928.herokuapp.com/',
		description: 'Create, read and edit articles about space and physics.  Keeps track of all revisions and has a random feature!',
		github: 'https://github.com/akramsabbah9/wikipleiades'
	},
	{
		src: amanuensis,
		altText: 'Amanuensis',
		caption: 'App for taking notes',
		link: 'https://sheltered-crag-78743.herokuapp.com/',
		description: 'This App is great for creating, saving and deleting notes at your leisure!  The notes are stored in local storage.',
		github: 'https://github.com/jaderiver62/amanuensis'
	},
	{
		src: apparatus,
		altText: 'Apparatus',
		caption: 'Tech Blog Site',
		link: 'https://quiet-ocean-12254.herokuapp.com/',
		description: 'A blog site that anyone can join to post their thoughts about a variety of tech subjects!  Users can post and comment.',
		github: 'https://github.com/jaderiver62/apparatus'
	},
	{
		src: prosperity,
		altText: 'Prosperity',
		caption: 'Budget Tracking App',
		link: 'https://serene-everglades-38825.herokuapp.com/',
		description: 'Keep track of your budget in this simple app that stores your information and displays trends in a chart',
		github: 'https://serene-everglades-38825.herokuapp.com/'
	},
	{
		src: safePassage,
		altText: 'Safe Passage',
		caption: 'Air Quality/Covid-19 Tracker',
		link: 'https://jaderiver62.github.io/safe-passage/',
		description: 'Get up to date air-quality information and Covid-19 reports for the US.',
		github: 'https://jaderiver62.github.io/safe-passage/'
	},
	{
		src: scheduler,
		altText: 'Work Day Scheduler',
		caption: 'Keep your schedule organized',
		link: 'https://jaderiver62.github.io/work-day-scheduler/',
		description: 'An app to plan your day with ease.',
		github: 'https://github.com/jaderiver62/work-day-scheduler'
	},
	{
		src: weatherBee,
		altText: 'WeatherBee',
		caption: 'Ad-Free Weather App',
		link: 'https://jaderiver62.github.io/weather-bee/',
		description: 'Search for a 5-day forecast for anywhere on the globe!',
		github: 'https://github.com/jaderiver62/weather-bee/'
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
					{items.map((item) => (
                    <Project
						img={item.src}
                        name={item.altText}
						caption={item.caption}
						description={item.description}
                        github={item.github}
						link={item.link}
						               />
                ))}

					</Row>
				</div>
			</div>
		</div>
	);
}
//
export default Portfolio;