import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthenticationForm from './components/authenticationForm/AuthenticationForm';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import ViewChangeContext from './contexts/SingedContext';
import Layout from './components/Layout.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';
import './App.scss';

function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <ViewChangeContext.Provider value={{ isLogged, setIsLogged }}>
      <Router>
          <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={isLogged ? <AuthenticationForm /> : <Navigate to="/register" />} />
            <Route path="/register" element={!isLogged ? <RegistrationForm /> : <Navigate to="/" />} />
            <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
      </Router>
    </ViewChangeContext.Provider>
  );
}

export default App;

