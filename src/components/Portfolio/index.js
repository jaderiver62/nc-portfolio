
import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,

} from 'reactstrap';
import amanuensis from "../../assets/portfolio/amanuensis.png";
import apparatus from "../../assets/portfolio/apparatus.png";
import liaison from "../../assets/portfolio/liaison.png";
import passwordGenerator from "../../assets/portfolio/password-generator.png";
import prosperity from "../../assets/portfolio/prosperity.png";
import safePassage from "../../assets/portfolio/safe-passage.png";
import scheduler from "../../assets/portfolio/scheduler.png";
import weatherBee from "../../assets/portfolio/weather-bee.png";
import workbase from "../../assets/portfolio/workbase.png";

const items = [
	{
		src: amanuensis,
		altText: 'Amanuensis',
		caption: '✹ Note App',
		link: 'https://sheltered-crag-78743.herokuapp.com/'
	},
	{
		src: apparatus,
		altText: 'Apparatus',
		caption: '✹ Tech Blog',
		link: 'https://quiet-ocean-12254.herokuapp.com/'
	},
	{
		src: liaison,
		altText: 'Liaison',
		caption: '✹ Organizational App',
		link: 'https://github.com/jaderiver62/liaison'
	},
	{
		src: passwordGenerator,
		altText: 'Password Generator',
		caption: 'Helper App',
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
		caption: '✹ Organizational App',
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
			><Router>
				<Link to={item.link}><img src={item.src} alt={item.altText} /></Link>
				</Router>
				<CarouselCaption captionText={item.caption} captionHeader={item.altText} />
			</CarouselItem>
		);
	});


	return (
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
	);
}

export default Portfolio;