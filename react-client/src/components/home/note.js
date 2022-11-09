import { GiBurningDot } from "react-icons/gi";
import { IconContext } from "react-icons";

const Note = () => {
    return (
        <div className="d-flex align-items-center" style={{ height: "80vh" }}>
            <div className="container px-4 px-lg-5 text-center">
                <h3 className="mb-4">Note :</h3>
                <IconContext.Provider value={{ style: { verticalAlign: "middle", marginBottom: "0.2em", width: "2em" } }}>
                    <h5 className="mb-2">{<GiBurningDot />} <em>If you register with "admin" name, then you will get different features</em></h5>
                    <h5>{<GiBurningDot />} <em>Express-api running on port 3001</em></h5>
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default Note;