import { useDispatch, useSelector } from "react-redux";
import {
  selectSpaces,
  // selectSpacesWithStories,
} from "../../store/space/selectors";
import { useParams } from "react-router-dom";
import { fetchDetailsSpace } from "../../store/space/thunk";
import { useEffect } from "react";

const Details = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const spaces = useSelector(selectSpaces);
  // const spacesWithStories = useSelector(selectSpacesWithStories);
  console.log(routeParams.id);

  useEffect(() => {
    dispatch(fetchDetailsSpace(routeParams.id));
  }, [dispatch, routeParams.id]);

  return (
    <div>
      <h2>{spaces.title}</h2>
      <h2>Stories</h2>
      {/* <p>{spacesWithStories.name}</p> */}
    </div>
  );
};

export default Details;
