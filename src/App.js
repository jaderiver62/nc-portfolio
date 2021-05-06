import React, { useEffect, useState } from "react";
import { Contact, Footer, Portfolio, Resume, Header, About} from "./components";
import "./App.css";
// App hosts the pages
function App() {
  const [tabs] = useState([
      {name: "About", title: "About Me"},
      {name: "Portfolio", title: "My Portfolio"},
      {name: "Contact", title: "Send me a message!"},
      {name: "Resume", title: "Resume"}
  ]);
  // Various page tabs in an array
  const [currentView, setCurrentView] = useState(tabs[0]);

  useEffect(() => {
    document.title = `${currentView.name} ❆ Nina Cummings`
}, [currentView]);
// Changes the page title according to the tab
const renderView = name => {
  return (name === "Portfolio") ? <Portfolio /> :
  (name === "Contact") ? <Contact /> :
  (name === "Resume") ? <Resume /> : <About />;
};
  return (
    
    <div className = "page-styles">
      <main>
        <Header
        tabs={tabs}
        currentView={currentView}
        setCurrentView={setCurrentView}
        ></Header>                 
        {renderView(currentView.name)}
      </main>
      <Footer/>
    </div>
  );
}
// Each page has a Header and Footer so we put the components here.
// All other Components render when the tab is selected


export default App;
