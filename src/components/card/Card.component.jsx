import "./card.styles.css";
import Button from "@mui/material/Button";

const Card = ({ monsters }) => {
  return (
    <>
      {monsters.map((monster) => {
        const { username, name, id } = monster;

        return (
          <div className="card" key={id}>
            <img
              className="card__image"
              alt="Monster 1"
              src={`https://robohash.org/${id}?set=set2&size=180x180`}
            />
            <p className="card__name">{name}</p>
            <p className="card__nickname">
              <span className="span-nick">Nickname: </span>
              {username}
            </p>
            <div className="card__button">
              <Button variant="outlined" color="warning">
                Hunt
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
