import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Dashboard from "./components/dashboard/";
import Register from "./components/register";
import Undefined from "./components/undefined";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<Dashboard title="ATTENDANCE LIST" />}
        />
        <Route path="*" element={<Undefined />} />
      </Routes>
    </Router>
  );
}

export default App;
