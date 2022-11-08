import Navigation from "../dashboard/navbar"
import Footer from "./footer"
import Header from "./header"
import Note from "./note"

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Note />
      <Footer />
    </div>
  )
}

export default Home
