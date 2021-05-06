// Header Component - linked to Nav with props
import React from 'react';
import Nav from "../Nav";


//TODO: style this and pass values to Nav with props
function Header({tabs, currentView, setCurrentView}) {
	return (
		<div className="header-section">
			<div className="header-text-styles">
				<h1 className="h1">
					<span className="image-text">Nina Cummings</span>
				</h1>
				<Nav tabs={tabs} currentView={currentView} setCurrentView={setCurrentView}/>
			</div>

		</div>
	);
}

export default Header;