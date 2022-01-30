export const BASE_URL = `https://api.spotify.com/v1`;

export const apiEndpoints = {
  getUserPlaylist: (userId: string) => {
    return `/users/${userId}/playlists`;
  },
  getCategories: () => {
    return `/browse/categories`;
  },
  getNewRelease: () => {
    return `/browse/new-releases?country=IN`;
  },
};
