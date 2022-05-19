import axios from "axios";
import { startLoading, spacesFetched, detailsSpaceFetched } from "./slice";

const API_URL = `http://localhost:4000`;

export async function fetchSpaces(dispatch, getState) {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${API_URL}/space`);
    console.log("response", response.data);
    const spaces = response.data;
    dispatch(spacesFetched(spaces));
  } catch (error) {
    console.log(error.message);
  }
}

export function fetchDetailSpace(id) {
  return async function (dispatch) {
    try {
      dispatch(startLoading());
      const response = await axios.get(`${API_URL}/space/${id}`);
      console.log("response details", response.data);
      const space = response.data;
      dispatch(detailsSpaceFetched(space));
    } catch (error) {
      console.log(error.message);
    }
  };
}
