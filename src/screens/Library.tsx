import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Box, Header, theme, Text } from "../components";

const PlayList = () => {
  return (
    <Box>
      <Text variant="title2"> Playlist</Text>
    </Box>
  );
};

const Artists = () => {
  return (
    <Box>
      <Text variant="title2">Artists</Text>
    </Box>
  );
};

const Albums = () => {
  return (
    <Box>
      <Text variant="title2"> Albums</Text>
    </Box>
  );
};

const Library = () => {
  const [isMusic, setIsMusic] = useState("music");
  const [isPlaylist, setIsPlaylist] = useState(true);
  const [isArtists, setIsArtists] = useState(false);
  const [isAlbum, setIsAlbums] = useState(false);

  const handleMusicChange = (title: string) => {
    if (title === "playlist") {
      setIsPlaylist(true);
      setIsArtists(false);
      setIsAlbums(false);
    } else if (title === "artists") {
      setIsPlaylist(false);
      setIsArtists(true);
      setIsAlbums(false);
    } else if (title === "albums") {
      setIsPlaylist(false);
      setIsArtists(false);
      setIsAlbums(true);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Box flex={1}>
        <Box marginHorizontal="m" marginVertical="l" flexDirection="row">
          <TouchableWithoutFeedback onPress={() => setIsMusic("music")}>
            <Text
              color={isMusic === "music" ? "text" : "border"}
              variant="title1"
            >
              {" "}
              Music
            </Text>
          </TouchableWithoutFeedback>
          <Box width={20} />
          <TouchableWithoutFeedback onPress={() => setIsMusic("podcasts")}>
            <Text
              color={isMusic === "podcasts" ? "text" : "border"}
              variant="title1"
            >
              {" "}
              Podcasts
            </Text>
          </TouchableWithoutFeedback>
        </Box>
        <Box marginHorizontal="m">
          {isMusic === "music" ? (
            <Box>
              <Box flexDirection="row">
                <TouchableWithoutFeedback
                  onPress={() => handleMusicChange("playlist")}
                >
                  <Box marginRight="s">
                    <Text variant="title2"> Playlists</Text>
                    {isPlaylist ? (
                      <Box
                        width="90%"
                        margin="s"
                        height={4}
                        backgroundColor="borderLine"
                      />
                    ) : null}
                  </Box>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => handleMusicChange("artists")}
                >
                  <Box marginHorizontal="s">
                    <Text variant="title2"> Artists</Text>
                    {isArtists ? (
                      <Box
                        width="90%"
                        margin="s"
                        height={4}
                        backgroundColor="borderLine"
                      />
                    ) : null}
                  </Box>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => handleMusicChange("albums")}
                >
                  <Box marginHorizontal="s">
                    <Text variant="title2"> Albums </Text>
                    {isAlbum ? (
                      <Box
                        width="90%"
                        margin="s"
                        height={4}
                        backgroundColor="borderLine"
                      />
                    ) : null}
                  </Box>
                </TouchableWithoutFeedback>
              </Box>
              <Box>
                {isPlaylist ? <PlayList /> : null}
                {isArtists ? <Artists /> : null}
                {isAlbum ? <Albums /> : null}
              </Box>
            </Box>
          ) : (
            <Box>
              <Text variant="title2">Podcasts</Text>
            </Box>
          )}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
});

export default Library;
