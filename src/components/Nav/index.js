import React from "react";

function Nav(props) {
	const {tabs =[], currentView, setCurrentView } = props;

	return (
		<div className="header-text-styles">
			<ul className="nav-tabs" >
				{tabs.map(tab => (
					<li key={tab.name}
					className={`${currentView.name === tab.name}`}>
						<div className="tab" onClick={() => setCurrentView(tab)}>{tab.name}</div></li>
				))}

			</ul>
		</div>
	);
}

export default Nav;