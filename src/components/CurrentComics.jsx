import comics from "../../data/comics.js";

function comicsDisplay() {
  return (
    <div className="container">
      <h3>Current Series</h3>
      <div className="row">
        {comics.map((curComic) => (
          <div className="card my-5">
            <img src={curComic.thumb} alt={`Fumetto ${curComic.title}`} />
            <h5>{curComic.title}</h5>
          </div>
        ))}
      </div>
      <span>Load More</span>
    </div>
  );
}

export default comicsDisplay;
