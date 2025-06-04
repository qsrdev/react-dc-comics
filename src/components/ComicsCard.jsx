import SingleCard from "./SingleCard";
//const ComicsCard = ({comicsList}) => {
//const ComicsCard = (props) => {

// props.comicsList
const ComicsCard = ({ comicsList }) => {
  const renderCards = () => {
    return comicsList.map(({ thumb, title }, index) => <SingleCard thumb={thumb} title={title} index={index} />);
  };

  return <div className="row">{renderCards()}</div>;
};

export default ComicsCard;
