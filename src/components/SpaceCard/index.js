import "./styles.css";

const SpaceCard = ({ title, description, backgroundColor, color }) => {
  return (
    <div
      className="spaceCard"
      style={{ color: "{color}", backgroundColor: "{backgroundColor}" }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Visit Space</button>
    </div>
  );
};

export default SpaceCard;
