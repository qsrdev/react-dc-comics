import comics from "../../data/comics.js";

const ComicsCard = () => {
  const renderCards = () => {
    return comics.map(({ thumb, title }, index) => (
      <div className={`card my-5 card-${index}`}>
        <img src={thumb} alt={`Fumetto ${title}`} />
        <h5 className="my-5">{title}</h5>
      </div>
    ));
  };

  return <div className="row">{renderCards()}</div>;
};

export default ComicsCard;
