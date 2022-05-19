import { useDispatch, useSelector } from "react-redux";
import { selectDetailSpace } from "../../store/space/selectors";
import { useParams } from "react-router-dom";
import { fetchDetailSpace } from "../../store/space/thunk";
import { useEffect } from "react";
import StoryCard from "../../components/StoryCard";

const Details = () => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const detailSpace = useSelector(selectDetailSpace);

  console.log(routeParams.id);

  useEffect(() => {
    dispatch(fetchDetailSpace(routeParams.id));
  }, [dispatch, routeParams.id]);

  return detailSpace ? (
    <div>
      <div key={detailSpace.id}>
        <h2>{detailSpace.title}</h2>
        <p>{detailSpace.description}</p>
      </div>
      <div>
        <h3>Stories</h3>
        {detailSpace.Stories.map((detail) => {
          return (
            <div>
              <StoryCard
                key={detail.id}
                id={detail.id}
                name={detail.name}
                content={detail.content}
                img={detail.imageUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Details;
