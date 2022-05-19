import { useDispatch, useSelector } from "react-redux";
import { selectSpaces } from "../../store/space/selectors";
import { useParams } from "react-router-dom";
import { fetchDetailsSpace } from "../../store/space/thunk";
import { useEffect } from "react";

const Details = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const spaces = useSelector(selectSpaces);

  useEffect(() => {
    dispatch(fetchDetailsSpace(routeParams.id));
  }, [dispatch]);

  return (
    <div>
      <p>ID: {routeParams.id}</p>
      <h2>Title: {spaces.title}</h2>
    </div>
  );
};

export default Details;
