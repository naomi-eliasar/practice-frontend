import React from "react";
import HeroBanner from "../../components/HeroBanner";
import SpaceCard from "../../components/SpaceCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectSpaces } from "../../store/space/selectors";
import { fetchSpaces } from "../../store/space/thunk";

const Home = () => {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);

  useEffect(() => {
    dispatch(fetchSpaces);
  }, [dispatch]);

  return (
    <div>
      <HeroBanner>
        <h1>Home</h1>
      </HeroBanner>
      {spaces.map((space) => {
        return (
          <div className="spaceFeed">
            <SpaceCard
              key={space.id}
              id={space.id}
              title={space.title}
              description={space.description}
              backgroundColor={space.backgroundColor}
              color={space.color}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
