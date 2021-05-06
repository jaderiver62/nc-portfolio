
import React, { useState } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,

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

const items = [
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
				key={item.src}
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
			<div className="portfolio-itemized">

			</div>
		</div>
	);
}

export default Portfolio;