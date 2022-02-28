import "./App.css";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import WeeklyPlan from "./pages/WeeklyPlan";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/weeklyplan" element={<WeeklyPlan />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
