import { useState } from "react";
import {Link} from "react-router-dom";
import "./searchbar.scss";

function Searchbar() {
  const [change, setchange] = useState({
    type: "buy",
    city: "",
    minPrice: "",
    maxPrice: "",
  });

  const types = ["buy", "rent"];
  const switchType = (val) => {
    setchange((prev)=> ({...prev,type:val}));
  };

const handleChange = e =>{
  setchange((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};
  return (
    <div className="searchbar">
      <div className="type">
        {types.map((type) => (
          <button key={type} onClick={()=>  switchType(type)} className={change.type === type ? "active" : ""}>
            {type}
          </button>
        ))}

      </div>
      <form action="">
        <input type="text" name="city" placeholder="City" onChange={handleChange} />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          onChange={handleChange}
        />
        <Link to={`/list?type=${change.type === 'all' ? '' : change.type}${change.city ? `&city=${change.city}` : ''}${change.minPrice ? `&minPrice=${change.minPrice}` : ''}${change.maxPrice ? `&maxPrice=${change.maxPrice}` : ''}`}><button>
          <img src="/search.png" alt="" />
        </button></Link>
      </form> 
    </div>   
  );
}

export default Searchbar;
