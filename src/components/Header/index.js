import React from 'react';
import Nav from "../Nav";
/*import coverImage from "../../assets/header/starbirth.jpg";
*/

//TODO: style this and pass values to Nav with props
function Header(props) {
	const { currentView, setCurrentView } = props;
	return (
		<div class="header-section">
			<div class="header-text-styles">
				<h1 class="h1">
					<span class="image-text">Nina Cummings</span>
				</h1>
				<Nav></Nav>
			</div>

		</div>
	);
}

export default Header;