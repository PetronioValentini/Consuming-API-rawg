import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./GameCard.css";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <Link to={`/game/${game.id}`}>
        <img src={game.background_image} alt={game.name} />
        <h2>{game.name}</h2>
        <p>{formatDate(game.released)}</p>
      </Link>
    </div>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    background_image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameCard;
