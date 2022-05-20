import React, { useState, useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { selectMySpace, selectToken } from "../../store/user/selectors";
import { useNavigate } from "react-router-dom";
import { deleteStory } from "../../store/user/actions";
import StorySpaceCard from "../../components/StorySpaceCard";
import AddStoryForm from "../../components/AddStoryForm";

const MySpace = () => {
  const token = useSelector(selectToken);
  const space = useSelector(selectMySpace);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    if (!token) navigate("/");
  }, [token, navigate]);

  const onDeleteClick = (id) => {
    console.log("clicked?", id);
    dispatch(deleteStory(id));
  };

  return (
    <div>
      <div
        style={{
          color: space.color,
          backgroundColor: space.backgroundColor,
          width: "100%",
          minHeight: "200px",
          paddingTop: "60px",
          paddingLeft: "100px",
          marginBottom: "20px",
        }}
      >
        <h1>{space.title}</h1>
        <h4>{space.description}</h4>
      </div>
      <div className="buttonContainer">
        <button onClick={() => setFormOpen(!formOpen)}>Post new story</button>
        <button>Edit my space</button>
      </div>
      <div className="formContainer">
        {formOpen && (
          <div>
            <AddStoryForm />
          </div>
        )}
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
