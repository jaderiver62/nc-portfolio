import React, { useEffect, useState } from "react";
import { Contact, Footer, Portfolio, Resume, Header, About} from "./components";
import "./App.css";
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css";

function App() {
  const [tabs] = useState([
      {name: "About", title: "About Me"},
      {name: "Portfolio", title: "My Portfolio"},
      {name: "Contact", title: "Send me a message!"},
      {name: "Resume", title: "Resume"}
  ]);
  const [currentView, setCurrentView] = useState(tabs[0]);

  useEffect(() => {
    document.title = `${currentView.name} ❆ Nina Cummings`
}, [currentView]);

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
      <Footer></Footer>
    </div>
  );
}

export default App;
