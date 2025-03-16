import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewChangeContext from "./contexts/SingedContext";
import NotFoundPage from "./components/NotFoundPage.jsx";
import "./App.scss";
import FormsSwitcher from "./components/formsswitcher/FormsSwitcher.jsx";

function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <ViewChangeContext.Provider value={{ isLogged, setIsLogged }}>
      <Router>
        <Routes>
          <Route path="/" element={<FormsSwitcher />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ViewChangeContext.Provider>
  );
}

export default App;
