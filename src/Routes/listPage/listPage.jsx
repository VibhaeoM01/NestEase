import "./listPage.scss";
import { listData } from "../../lib/dummydata";
import Filter from "../../components/filter/filter";
import Card from "../../components/card/card";
import Map from "../../components/map/map";
import { useLoaderData } from "react-router-dom";
function ListPage() {
  // const data = listData;
  const {posts} =useLoaderData()
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
            <Filter />
          {posts.map((item) => (
            <Card key={item.id} item={item} />
          ))}
           
        </div>

      </div>
      <div className="mapContainer"><Map items={posts}/></div>
    </div>
  );
}

export default ListPage;

