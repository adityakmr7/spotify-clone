import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Box, theme, Text } from "./theme";

const AppThumbnail = ({ name, owner, images }: any) => {
  return (
    <TouchableOpacity>
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
    </TouchableOpacity>
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
