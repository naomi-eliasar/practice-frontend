import React, { useState } from "react";
import "./styles.css";
import HeroBanner from "../../components/HeroBanner";
import { useDispatch, useSelector } from "react-redux";
import { selectMySpace } from "../../store/user/selectors";
import Loading from "../../components/Loading";
import { deleteStory } from "../../store/user/actions";
import StorySpaceCard from "../../components/StorySpaceCard";

const MySpace = () => {
  const [formOpen, setFormOpen] = useState(false);
  const dispatch = useDispatch();

  const space = useSelector(selectMySpace);
  if (!space) return <Loading />;

  const onDeleteClick = (id) => {
    console.log("clicked?", id);
    dispatch(deleteStory(id));
  };

  return (
    <div>
      <HeroBanner>
        <h1>{space.title}</h1>
        <h3>{space.description}</h3>
      </HeroBanner>
      <div className="buttonContainer">
        <button onClick={() => setFormOpen(!formOpen)}>Post new story</button>
        {formOpen && <div>POST A STORY FORM!</div>}
        <button>Edit my space</button>
      </div>

      {space.Stories.map((story) => {
        return (
          <div className="storyCardDeleteContainer">
            <StorySpaceCard
              key={story.id}
              id={story.id}
              name={story.name}
              content={story.content}
              img={story.imageUrl}
              btn={
                <button onClick={() => onDeleteClick(story.id)}>Delete</button>
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default MySpace;
