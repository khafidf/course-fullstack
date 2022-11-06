import ReactTypingEffect from "react-typing-effect";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Login = ({ title, description }) => {
  const [NIP, setNIP] = useState("");
  const [password, setPassword] = useState("");

  const handleNIP = (inputNIP) => {
    setNIP(inputNIP);
  };
  const handlePassword = (inputPassword) => {
    setPassword(inputPassword);
  };

  const userLogin = () => {
    console.log("login ready");

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
    <Container>
      <div className="d-flex justify-content-center fw-bold h3 my-4">
        <ReactTypingEffect
          text={[title, description]}
          speed={200}
          eraseDelay={800}
          eraseSpeed={100}
          typingDelay={100}
        />
      </div>
      <Form className="w-50 mx-auto">
        <Form.Group>
          <Form.Label className="fw-bold">NIP</Form.Label>
          <Form.Control
            type="number"
            placeholder="Masukkan NIP Anda"
            required
            onChange={(event) => handleNIP(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="******"
            required
            onChange={(event) => handlePassword(event.target.value)}
          />
        </Form.Group>
        <Button className="mt-4 w-100" onClick={() => userLogin()}>
          Login Sekarang
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
