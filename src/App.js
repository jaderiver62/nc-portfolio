import React, { useEffect, useState } from "react";
import { Contact, Footer, Header, Nav, Portfolio, Resume, SingleProject} from "./components";
import "./App.css";

function App() {
  const [categories] = useState([
    {name: "About", description: "A little information about me"},
    {name: "Contact", description: "How to contact me"},
    {name: "Portfolio", description: "A selection of my work"},
    {name: "Resume", description: "My resume"}

  ]);
  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (<div>
    </div>);

}

export default App;
