import { useEffect, useState } from "react";
import { Container, Button, Badge } from "react-bootstrap";
import axios from "axios";
import Navbar from "./navbar";
import Edit from "./edit";
import { logout } from "./logout";

const Dashboard = ({ title }) => {
  const [absensiList, setAbsensiList] = useState([]);
  const [absenNotif, setAbsenNotif] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("nama") && !localStorage.getItem("nip")) {
      console.log("user belum login");
      window.location.replace("/login");
    }
    axios({
      method: "GET",
      url: "http://localhost:3001/absensi",
    }).then((result) => setAbsensiList(result.data.absensi));
  }, [absenNotif]);

  const absen = (params) => {
    console.log(params);
    const requestingData = {
      nip: localStorage.getItem("nip"),
    };
    axios({
      method: "POST",
      url: `http://localhost:3001/absensi/${params}`,
      data: requestingData,
    }).then(() => {
      setAbsenNotif(!absenNotif);
    });
  };

  return (
    <Container>
      <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
        <Navbar />
        <h2>{title}</h2>
        <div>
          <p>Hello {localStorage.getItem("nama")}!</p>
          <p>NIP {localStorage.getItem("nip")} </p>
          <Button variant="danger" className="mb-2" onClick={() => logout()}>
            Logout
          </Button>
          <Edit title="Edit Profile" />
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">no.</th>
                <th scope="col">NIP</th>
                <th scope="col">Status</th>
                <th scope="col">Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {absensiList.map((absensi, i) => {
                const { users_nip, status, createdAt } = absensi;
                const date = new Date(createdAt);
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{users_nip}</td>
                    <td>{status}</td>
                    <td>{date.toLocaleDateString(["ban", "id"])}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center gap-1 mb-3">
          <Badge
            pill
            bg="primary"
            style={{ cursor: "pointer" }}
            onClick={() => absen("checkin")}
          >
            Checkin
          </Badge>
          <Badge
            pill
            bg="danger"
            style={{ cursor: "pointer" }}
            onClick={() => absen("checkout")}
          >
            Checkout
          </Badge>
        </div>
      </main>
    </Container>
  );
};

export default Dashboard;
