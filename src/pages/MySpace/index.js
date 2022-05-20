import React, { useState } from "react";
import HeroBanner from "../../components/HeroBanner";
import { useDispatch, useSelector } from "react-redux";
import { selectMySpace } from "../../store/user/selectors";
import Loading from "../../components/Loading";
import StoryCard from "../../components/StoryCard";
import { deleteStory } from "../../store/user/actions";

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
      <div>
        <button onClick={() => setFormOpen(!formOpen)}>Post new story</button>
        {formOpen && <div>POST A STORY FORM!</div>}
      </div>

      {space.Stories.map((story) => {
        return (
          <div>
            <StoryCard
              key={story.id}
              id={story.id}
              name={story.name}
              content={story.content}
              img={story.imageUrl}
            />
            <button onClick={() => onDeleteClick(story.id)}>
              Delete story
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MySpace;
