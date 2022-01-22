import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Box, theme, Text } from "./theme";

const AppThumbnail = ({ name, owner, images }: any) => {
  return (
    <Box elevation={2} margin="s">
      <Box borderRadius="m">
        <Image style={styles.thumbImage} source={{ uri: images }} />
        <Box width={120} marginVertical="s">
          <Text numberOfLines={1} variant="listContentTitle">
            {name}
          </Text>
          <Text variant="listContentSubTitle">{owner}</Text>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.colors.primary,
    flex: 1,
  },
  thumbImage: {
    height: 120,
    width: 120,
    borderRadius: theme.borderRadii.m,
  },
});

export default AppThumbnail;
