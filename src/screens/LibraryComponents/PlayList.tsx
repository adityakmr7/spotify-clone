import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import songsData from "../../data/songsData";
import { Image } from "react-native";

const _renderItem = ({ item }) => {
  return (
    <Box>
      <Box marginVertical="s" flexDirection="row" alignItems="center">
        <Image
          style={{ width: 80, height: 80 }}
          source={{ uri: item.imageUri }}
        />
        <Box width={10} />
        <Box>
          <Text fontWeight="bold" numberOfLines={1} variant="title2">
            {" "}
            {item.artistsHeadline}
          </Text>
          <Text paddingLeft="s" fontWeight="bold" variant="body">
            {" "}
            {item.id} songs
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const PlayList = () => {
  return (
    <Box>
      <FlatList data={songsData} renderItem={_renderItem} />
    </Box>
  );
};

export default PlayList;
