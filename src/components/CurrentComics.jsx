import comics from "../../data/comics.js";
// import styles from "./CurrentComics.module.css";

function comicsDisplay() {
  return (
    <div className="container">
      <h3 className="">Current Series</h3>
      <div className="row">
        {comics.map((curComic, index) => (
          <div className={`card my-5 card-${index}`}>
            <img src={curComic.thumb} alt={`Fumetto ${curComic.title}`} />
            <h5 className="my-5">{curComic.title}</h5>
          </div>
        ))}
      </div>
      <div className="flex ">
        <span className="loadmore mtb-5">Load More</span>
      </div>
    </div>
  );
}

export default comicsDisplay;
