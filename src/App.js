import React, { useEffect, useState } from "react";
import { Contact, Footer, Portfolio, Resume, Header, About} from "./components";
import "./App.css";

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
    <div class = "page-styles">
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
