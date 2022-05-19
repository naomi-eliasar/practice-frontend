import "./styles.css";
import { Link } from "react-router-dom";

const SpaceCard = ({ title, description, backgroundColor, color }) => {
  return (
    <div className="spaceCard" style={{ backgroundColor: { backgroundColor } }}>
      <h2>{title}</h2>
      <p style={{ color: { color } }}>{description}</p>
      <button>
        <Link to={`/details`}>Visit Space</Link>
      </button>
    </div>
  );
};

export default SpaceCard;
