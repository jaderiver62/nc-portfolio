import React from "react";

function Nav(props) {
	const {tabs =[], currentView, setCurrentView } = props;

	return (
		<div class="header-text-styles">
			<ul class="nav-tabs" >
				{tabs.map(tab => (
					<li className={`${currentView.name === tab.name}`}>
						<div class="tab" onClick={() => setCurrentView(tab)}>{tab.name}</div></li>
				))}

			</ul>
		</div>
	);
}

export default Nav;