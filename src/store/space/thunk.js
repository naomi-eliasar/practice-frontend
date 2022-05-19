import axios from "axios";
import { startLoading, spacesFetched } from "./slice";

export async function fetchSpaces(dispatch, getState) {
  try {
    dispatch(startLoading());
    const response = await axios.get("http://localhost:4000/space");
    console.log("response", response);
    const spaces = response.data;
    dispatch(spacesFetched(spaces));
  } catch (error) {
    console.log(error.message);
  }
}

export function fetchDetailsSpace(id) {
  return async function (dispatch, getState) {
    try {
      dispatch(startLoading());
      const response = await axios.get(`http://localhost:4000/space/${id}`);
      console.log("response details", response);
      const details = response.data;
      dispatch(spacesFetched(details));
    } catch (error) {
      console.log(error.message);
    }
  };
}
