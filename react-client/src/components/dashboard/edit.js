import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { logout } from "./logout";
import axios from "axios";

const Edit = () => {
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
    }).then(() => {
      alert("Password berhasil diubah, silahkan login ulang!")
      logout("/login")
    });
  };

  const name = localStorage.getItem("nama");

  return (
    <Form className="my-2">
      <Form.Group className="mb-2">
        <Form.Label>Nama</Form.Label>
        <Form.Control
          onChange={(event) => setNama(event.target.value.toLowerCase())}
          defaultValue={name.charAt(0).toUpperCase() + name.slice(1)}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Password Baru</Form.Label>
        <Form.Control onChange={(event) => setNewPassword(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Password Lama</Form.Label>
        <Form.Control onChange={(event) => setPassword(event.target.value)} />
      </Form.Group>
      <Form.Text className="text-muted">
        Silahkan masukkan password lama anda. Anda diharuskan melakukana login
        ulang setelah mengubah password
      </Form.Text>
      <Button className="btn-lg px-5 w-100 mt-2" onClick={() => updateProfile()}>
        Update Profile
      </Button>
    </Form>
  );
};

export default Edit;
