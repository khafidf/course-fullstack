import { useEffect, useState } from "react";
import { Container, Badge } from "react-bootstrap";
import axios from "axios";
import Navigation from "./navbar";
import Footer from "../home/footer";

const Dashboard = ({ title }) => {
  const [absensiList, setAbsensiList] = useState([]);
  const [absenNotif, setAbsenNotif] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("nama") && !localStorage.getItem("nip")) {
      window.location.replace("/login");
    }
    axios({
      method: "GET",
      url: "http://localhost:3001/absensi",
    }).then((result) => {
      setAbsensiList(result.data.absensi);
    });
  }, [absenNotif]);

  const absen = (params) => {
    const requestingData = {
      nip: localStorage.getItem("nip"),
      status: params,
    };

    axios({
      method: "POST",
      url: `http://localhost:3001/absensi/check${params}`,
      data: requestingData,
    }).then(() => {
      setAbsenNotif(!absenNotif);
    });
  };

  return (
    <>
      <Container>
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
          <Navigation />
          {localStorage.getItem("nama") == "admin" ? (
            <h4>{title}</h4>
          ) : (
            <div className="d-flex justify-content-between align-items-center my-4">
              <h4>{title}</h4>
              <div className="d-flex gap-2">
                <h5 className="button-hover">
                  <Badge pill bg="primary" onClick={() => absen("in")}>
                    Checkin
                  </Badge>
                </h5>
                <h5 className="button-hover">
                  <Badge pill bg="danger" onClick={() => absen("out")}>
                    Checkout
                  </Badge>
                </h5>
              </div>
            </div>
          )}
          <div className="table-responsive rounded-top">
            <table
              className="table table-hover table-sm text-center"
              style={{ cursor: "pointer" }}
            >
              <thead className="table" style={{ backgroundColor: "#caf0f8" }}>
                {localStorage.getItem("nama") == "admin" ? (
                  <tr>
                    <th scope="col">no</th>
                    <th scope="col">NIP</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date</th>
                  </tr>
                ) : (
                  <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Date</th>
                  </tr>
                )}
              </thead>
              <tbody>
                {absensiList.map((absensi, i) => {
                  const { users_nip, status, createdAt } = absensi;
                  const date = new Date(createdAt);
                  return localStorage.getItem("nama") == "admin" ? (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{users_nip}</td>
                      <td>{status}</td>
                      <td>{date.toLocaleString(["ban", "id"])}</td>
                    </tr>
                  ) : users_nip == localStorage.getItem("nip") ? (
                    <tr key={i}>
                      <td>{status}</td>
                      <td>{date.toLocaleString(["ban", "id"])}</td>
                    </tr>
                  ) : (
                    ""
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
