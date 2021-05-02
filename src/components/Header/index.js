import React from 'react';
import Nav from "../Nav";
/*import coverImage from "../../assets/header/starbirth.jpg";
*/

//TODO: style this and pass values to Nav with props
function Header() {
	return (
		<section>
			<h1>Nina Cummings</h1>
			<Nav></Nav>
{/*			<img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
*/}		</section>

	);
}

export default Header;