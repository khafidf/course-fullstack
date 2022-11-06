import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { logout } from "./logout";

const Edit = ({ title }) => {
  const [nama, setNama] = useState(localStorage.getItem("nama"));
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const updateProfile = () => {
    const requestingData = {
      nip: localStorage.getItem("nip"),
      newPassword: newPassword,
      password: password,
      nama: nama,
    };

    axios({
      method: "PUT",
      url: "http://localhost:3001/users",
      data: requestingData,
    }).then(()=>{
        alert("anda keluar, silahkan login ulang!")
        logout()
    });
  };
  return (
    <Form className="my-4">
      <h3>{title}</h3>
      <Form.Group>
        <Form.Label>Nama</Form.Label>
        <Form.Control
          onChange={(event) => setNama(event.target.value)}
          defaultValue={localStorage.getItem("nama")}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password Baru</Form.Label>
        <Form.Control onChange={(event) => setNewPassword(event.target.value)} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password Lama</Form.Label>
        <Form.Control onChange={(event) => setPassword(event.target.value)} />
      </Form.Group>
      <Form.Text className="text-muted">
        Silahkan masukkan password lama anda. Anda diharuskan melakukana login
        ulang setelah mengubah password
      </Form.Text>
      <Button className="w-100" onClick={() => updateProfile()}>
        Update Password
      </Button>
    </Form>
  );
};

export default Edit;
