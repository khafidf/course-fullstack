import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./dashboard/navbar";

const Login = () => {
  const [NIP, setNIP] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("nama") && localStorage.getItem("nip")) {
      window.location.replace("/dashboard");
    };
  }, []);

  const handleNIP = (inputNIP) => {
    setNIP(inputNIP);
  };
  const handlePassword = (inputPassword) => {
    setPassword(inputPassword);
  };

  const userLogin = () => {
    // data sesuai nama di be
    const requestingData = {
      nip: NIP,
      password: password,
    };
    // hit endpoint
    axios({
      method: "POST",
      url: "http://localhost:3001/users/login",
      data: requestingData,
    }).then((result) => {
      localStorage.setItem("nip", result.data.users.nip);
      localStorage.setItem("nama", result.data.users.nama);
      window.location.replace("/dashboard");
    });
  };

  return (
    <div>
      <Navigation />
      <div className="bg-primary" style={{ height: "100vh" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card text-dark" style={{ borderRadius: "1rem", backgroundColor: "#caf0f8" }}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-4 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-dark-50 mb-5">Please enter your NIP and password!</p>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Enter your NIP"
                        required
                        onChange={(event) => handleNIP(event.target.value)}
                      />
                      <label className="form-label mt-1">NIP</label>
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="******"
                        required
                        onChange={(event) => handlePassword(event.target.value)}
                      />
                      <label className="form-label mt-1">Password</label>
                    </div>
                    <button className="btn btn-primary btn-lg px-5" onClick={() => userLogin()}>Login</button>
                  </div>
                  <div>
                    <p className="mb-0">Don't have an account? <a href="/register" className="text-primary-50 fw-bold text-decoration-none">Register</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;
