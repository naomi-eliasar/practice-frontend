import "./styles.css";

const StoryCard = ({ name, content, img, id }) => {
  return (
    <div key={id} className="storyCard">
      <h2>{name}</h2>
      <p>{content}</p>
      <img src={img} alt="Story" className="imageContainer" />
    </div>
  );
};

export default StoryCard;
