import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Box, Text } from "../../components";

import { Feather as Icon } from "@expo/vector-icons";
const PlayHeader = ({ _onMinimizeClick }: { _onMinimizeClick: () => void }) => {
  return (
    <Box
      alignItems="center"
      marginVertical="xl"
      flexDirection="row"
      justifyContent="space-between"
    >
      <TouchableWithoutFeedback onPress={_onMinimizeClick}>
        <Icon name="chevron-down" size={26} color="#FFFFFF" />
      </TouchableWithoutFeedback>
      <Box>
        <Text variant="listContentTitle">PLAYING FROM PLAYLIST</Text>
        <Text variant="listContentSubTitle" textAlign="center">
          lucifer
        </Text>
      </Box>
      <Icon name="more-vertical" size={26} color={"#ffffff"} />
    </Box>
  );
};

export default PlayHeader;
