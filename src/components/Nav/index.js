import React from "react";

//TODO: style, use props & map to build
function Nav(props) {
	const {tabs =[], currentView, setCurrentView } = props;

	return (
		<div class="header-text-styles">
			<ul class="nav-tabs" >
				{tabs.map(tab => (
					<li className={`${currentView.name === tab.name}`}>
						<div class="tab" onClick={() => setCurrentView(tab)}>{tab.name}</div></li>
				))}
				{/* <li class="image-text">About Me</li>
				<li class="image-text">Portfolio</li>
				<li class="image-text">Contact</li>
				<li class="image-text">Resume</li> */}
			</ul>
		</div>
	);
}

export default Nav;