import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStory } from "../../store/user/slice";

const AddStoryForm = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();

    console.log("new story:", name, content, imageUrl);

    const newStory = {
      name,
      content,
      imageUrl,
    };

    dispatch(addStory(newStory));

    setName("");
    setContent("");
    setImageUrl("");
  };

  return (
    <form onSubmit={submit}>
      <h2>Post a new story</h2>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Content:{" "}
          <input
            type="string"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Image url:{" "}
          <input
            type="string"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Post this story!</button>
      </p>
    </form>
  );
};

export default AddStoryForm;
