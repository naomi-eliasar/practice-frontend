import "./styles.css";
import { Link } from "react-router-dom";

const SpaceCard = ({ title, description, backgroundColor, color, id }) => {
  return (
    <div
      className="spaceCard"
      style={{ backgroundColor: `${backgroundColor}`, color: `${color}` }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <button>
        <Link to={`/details/${id}`}>Visit Space</Link>
      </button>
    </div>
  );
};

export default SpaceCard;
