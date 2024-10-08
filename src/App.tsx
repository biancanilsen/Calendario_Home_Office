import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CalendarPage from "./components/Calendar/CalendarPage";
import EsqueceuSenhaPage from "./Pages/EsqueceuSenha/EsqueceuSenhaPage";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/esqueceu-senha" element={<EsqueceuSenhaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
