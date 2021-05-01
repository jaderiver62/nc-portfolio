import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
function Header() {
  return (
    <section>
      <h1>Nina Cummings</h1>
      <img src={coverImage} style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default Header;