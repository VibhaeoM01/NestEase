import { useState } from "react";
import "./searchbar.scss";

function Searchbar() {
  const [change, setchange] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const types = ["buy", "rent"];
  const switchType = (val) => {
    setchange((prev)=> ({...prev,type:val}));
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
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
