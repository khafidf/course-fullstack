import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Dashboard from "./components/dashboard/";
import Register from "./components/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home title="HOME" />} />
        <Route
          path="/register"
          element={
            <Register title="REGISTER PAGE" description="ABSENSI SEDERHANA" />
          }
        />
        <Route
          path="/login"
          element={<Login title="LOGIN PAGE" description="ABSENSI SEDERHANA" />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard title="Dashboard absensi" />}
        />
        <Route
          path="*"
          element={
            <h1 className="d-flex justify-content-center">PAGE NOT FOUND</h1>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

// bikin home semenarik mungkin
// validasi invalid data supaya tidak mati (be)
// bikin page not found
// validasi input data dari fe
// validasi login (saat sudah login tidak bisa masuk login lagi)
// validasi sistem absensi(sehari 1 org hanya bisa 1x ci & co)