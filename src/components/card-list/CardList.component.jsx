import "./card-list.styles.css";
import Card from "../card/Card.component";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      <Card monsters={monsters} />
    </div>
  );
};

export default CardList;
