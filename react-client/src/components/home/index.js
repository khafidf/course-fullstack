import Navigation from "../dashboard/navbar";
import Footer from "./footer";
import Header from "./header";
import Note from "./note";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    if (localStorage.getItem("nama") && localStorage.getItem("nip")) {
      window.location.replace("/dashboard");
    }
  }, []);
  return (
    <div>
      <Navigation />
      <Header />
      <Note />
      <Footer />
    </div>
  );
};

export default Home;
