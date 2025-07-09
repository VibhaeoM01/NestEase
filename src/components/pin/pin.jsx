import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

function Pin({item}) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
          <Popup>
            <div className="popupContainer">
              <img src={item.images[0]} alt="" />
              <div className="textContainer">
                <Link to={`/${item.id}`}>{item.title}</Link>
                <span className="bed">{item.bedroom} {item.bedroom === 1 ? "bedroom" : "bedrooms"}</span>
                <b>$ {item.price}</b>
              </div>
            </div>
          </Popup>
        </Marker>
    // <div></div>
  );
}

export default Pin;