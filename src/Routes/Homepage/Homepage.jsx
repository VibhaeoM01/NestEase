import Searchbar from "../../components/Searchbar/Searchbar"
import "./homepage.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Homepage() {
  const {currentUser} = useContext(AuthContext); 
  console.log(currentUser); 
  
  return (
    <div className="homepage">
      <div className="textcontainer">
        <div className="wrapper">
          <h1 className="title">Your Ideal Stay Awaits – Find It Today!</h1>
          <p>
          Discover a stay that matches your lifestyle. Experience comfort, security, and convenience with carefully curated living spaces. Whether you seek a vibrant community or a peaceful retreat, find a place that feels like home – effortlessly and seamlessly!
        </p>
        
        

        <Searchbar />

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
      <div className="imagecontainer">
        <img src="bg1 up.png" alt="" />
      </div>
    </div>
  );
}

export default Homepage;
