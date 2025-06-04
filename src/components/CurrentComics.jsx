import comics from "../../data/comics.js";
import ComicsCard from "./ComicsCard.jsx";
// import styles from "./CurrentComics.module.css";

function comicsDisplay() {
  return (
    <div className="container">
      <h3 className="">Current Series</h3>

      <ComicsCard />

      <div className="flex ">
        <span className="loadmore mtb-5">Load More</span>
      </div>
    </div>
  );
}

export default comicsDisplay;
