import { videosSlice } from "./slice";

const {
  loadInitialGameVideos,
  loadInitialMusicVideos,
  loadMoreGameVideos,
  loadMoreMusicVideos,
} = videosSlice.actions;

export {
  loadInitialGameVideos,
  loadInitialMusicVideos,
  loadMoreGameVideos,
  loadMoreMusicVideos,
};
