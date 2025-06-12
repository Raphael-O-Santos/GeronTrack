// Styles
import "./App.css";
// Navigation
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Welcome from "./pages/Welcome";
import Recovery from "./pages/Recovery";
import Terms from "./pages/Terms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Recovery" element={<Recovery />} />
          <Route path="/Terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
