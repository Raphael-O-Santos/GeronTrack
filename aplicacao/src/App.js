// Navigation
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import NewUser from "./pages/NewUser";
import Residentes from "./pages/Residentes";
import Profissionais from "./pages/Profissionais";
// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Recovery" element={<Recovery />} />
          <Route path="/NewUser" element={<NewUser />} />
          <Route path="/Residentes" element={<Residentes />} />
          <Route path="/Profissionais" element={<Profissionais />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
