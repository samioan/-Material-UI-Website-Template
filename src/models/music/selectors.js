const albumsShown = (state) => state.music.albumsShown;
const albumsOnPage = (state) => state.music.albumsOnPage;
const albumsTotal = (state) => state.music.albumsTotal;
const musicPageItems = (state) => state.music.musicPageItems;
const allAlbums = (state) => state.music.allAlbums;
const musicError = (state) => state.music.musicError;
const musicLoading = (state) => state.music.musicLoading;
const musicPageError = (state) => state.music.musicPageError;
const musicPageLoading = (state) => state.music.musicPageLoading;

export {
  albumsShown,
  albumsOnPage,
  albumsTotal,
  musicPageItems,
  allAlbums,
  musicError,
  musicLoading,
  musicPageError,
  musicPageLoading,
};
