export const BASE_URL = `https://api.spotify.com/v1`;

export const apiEndpoints = {
  getUserPlaylist: (userId: string) => {
    return `${BASE_URL}/users/${userId}/playlists`;
  },
};
