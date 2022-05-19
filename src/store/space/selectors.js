export const selectSpaces = (reduxState) => reduxState.feed.spaces;

// export const selectSpacesWithStories = (reduxState) => {
//   const spaces = reduxState.feed.spaces;
//   const stories = reduxState.feed.stories;

//   const spacesWithStories = spaces.map((space) => {
//     const replaceStories = space.stories.map((storyId) =>
//       stories.find((fullStory) => storyId === fullStory.id)
//     );
//     return { ...space, stories: replaceStories };
//   });
//   console.log(stories);
//   return spacesWithStories;
// };
