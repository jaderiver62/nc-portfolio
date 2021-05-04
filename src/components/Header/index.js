import React from 'react';
import Nav from "../Nav";


//TODO: style this and pass values to Nav with props
function Header({tabs, currentView, setCurrentView}) {
	return (
		<div class="header-section">
			<div class="header-text-styles">
				<h1 class="h1">
					<span class="image-text">Nina Cummings</span>
				</h1>
				<Nav tabs={tabs} currentView={currentView} setCurrentView={setCurrentView}/>
			</div>

		</div>
	);
}

export default Header;