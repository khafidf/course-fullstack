const Footer = () => {
  return (
    <div
      className="d-flex align-items-center"
      style={{ height: "10vh", backgroundColor: "#001253" }}
    >
      <div className="container px-4 d-flex justify-content-around text-center">
        <a href="#home" className="d-flex text-decoration-none justify-content-center">
          <h5 className="text-light fs-5 my-auto mx-2">
            <span className="text-primary">D</span>'Attendance
          </h5>
        </a>
        <p className="text-light fs-6 my-0 mx-2" style={{ cursor: "pointer" }}>
          Dea Afrizal's Fullstack Course 5-6 Nov
        </p>
      </div>
    </div>
  );
};

export default Footer;
