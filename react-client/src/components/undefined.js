import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";

const Undefined = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="p-3 text-center shadow">
        <h1 className="display-1 font-weight-bold ">404</h1>
        <h4 className="text-muted">Page Not Found</h4>
        <p>The page got swallowed by a black hole...</p>
        <IconContext.Provider
          value={{ style: { verticalAlign: "middle", marginBottom: "0.2em" } }}
        >
          {localStorage.getItem("nama") && localStorage.getItem("nip") ? (
            <a className="btn btn-dark" href="/dashboard" role="button">
              {<RiDashboardFill />} Back to Dashboard
            </a>
          ) : (
            <a className="btn btn-dark" href="/" role="button">
              {<AiFillHome />} Back to Home
            </a>
          )}
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Undefined;
