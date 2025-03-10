import Searchbar from "../../components/Searchbar/Searchbar";
import "./homepage.scss";

function Homepage() {
  return (
    <div className="homepage">
      <div className="textcontainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Lorem fefipsum dolor sit amet consectetur, adipisicing elit. Expedita
          animi repellat ullam amet, explicabo voluptate modi, deserunt officiis
          quis velit, voluptatibus est natus architecto fugit cupiditate nisi
          quas illo in!
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
        <img src="bg.png" alt="" />
      </div>
    </div>
  );
}

export default Homepage;
