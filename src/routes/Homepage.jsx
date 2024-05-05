//import { useContext } from "react";
import SearchBar from "../components/SearchBar";
import "./Homepage.css";
//import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  //const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Your Favourite & Get Your Dream Place</h1>
          <p>
          Explore a handpicked collection of premier hotels and resorts, each offering unique experiences and exceptional service. From boutique hideaways to iconic landmarks, we provide a range of options to suit every traveler's taste and preference.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
