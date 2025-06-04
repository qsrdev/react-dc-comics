const SingleCard = ({ thumb, title, index }) => {
  return (
    <div className={`card my-5 card-${index}`}>
      <img src={thumb} alt={`Fumetto ${title}`} />
      <h5 className="my-5">{title}</h5>
    </div>
  );
};

export default SingleCard;
