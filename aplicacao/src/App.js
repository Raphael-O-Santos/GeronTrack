// Styles
import "./App.css";
// Navigation
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import NewUser from "./pages/NewUser";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Recovery" element={<Recovery />} />
          <Route path="/NewUser" element={<NewUser />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
