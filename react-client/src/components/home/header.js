import { AiOutlineArrowRight } from "react-icons/ai"

const Header = () => {
    return (
        <div className="d-flex align-items-center" style={{ height: "80vh", backgroundColor: "#caf0f8" }}>
            <div className="container px-4 px-lg-5 text-center">
                <h1 className="mb-1"><span className="text-primary">D</span>'Attendance</h1>
                <h3 className="mb-5"><em>A Website It Easy to Record Your Attendance</em></h3>
                <a className="btn btn-primary btn-xl" href="/login">Make Your Account {<AiOutlineArrowRight />}</a>
            </div>
        </div>
    );
};

export default Header