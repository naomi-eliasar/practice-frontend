import "./styles.css";

const StorySpaceCard = ({ name, content, img, id, btn }) => {
  return (
    <div key={id} className="storySpaceCard">
      <h2>{name}</h2>
      <p>{content}</p>
      <img src={img} alt="Story" className="imageContainer" />
      {btn}
    </div>
  );
};

export default StorySpaceCard;
