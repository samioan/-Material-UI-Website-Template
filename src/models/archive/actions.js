import { archiveSlice } from "./slice";

const {
  loadInitialArchivedGames,
  loadMoreArchivedGames,
  loadInitialArchivedMusic,
  loadMoreArchivedMusic,
} = archiveSlice.actions;

export {
  loadInitialArchivedGames,
  loadMoreArchivedGames,
  loadInitialArchivedMusic,
  loadMoreArchivedMusic,
};
