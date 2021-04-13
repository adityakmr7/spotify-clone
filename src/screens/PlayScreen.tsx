import React, { useState } from "react";

import {
  Dimensions,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from "react-native";
import Animated from 'react-native-reanimated';
import { Box, Text } from "../components";
import { Feather as Icon } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";
import { AntDesign as IconAnt } from "@expo/vector-icons";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const HEIGHT = wHeight;
const DOCK_HEIGHT = wHeight * 0.08;
const _ICON_SIZE = 26;
const _ICON_COLOR = "black";

const PlayHeader = ({ _onMinimizeClick }: { _onMinimizeClick: () => void }) => {
  return (
    <Box
      alignItems="center"
      marginVertical="xl"
      flexDirection="row"
      justifyContent="space-between"
    >
      <TouchableWithoutFeedback onPress={_onMinimizeClick}>
        <Icon name="chevron-down" size={26} color="black" />
      </TouchableWithoutFeedback>
      <Box>
        <Text>PLAYING FROM PLAYLIST</Text>
        <Text textAlign="center">lucifer</Text>
      </Box>
      <Icon name="more-vertical" size={26} color="black" />
    </Box>
  );
};

const PlayTrack = () => {
  return (
    <>
      <Box
        marginHorizontal="m"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginVertical="xl"
      >
        <Box>
          <Text>Ain't No Rest for the wicked</Text>
          <Text>Cage The Elephant</Text>
        </Box>
        <Box>
          <Icon name="heart" size={26} color={"black"} />
        </Box>
      </Box>
      <Box marginHorizontal="m">
        <ProgressBar progress={0.5} color={"black"} />
        <Box
          marginVertical="s"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text>1.34</Text>
          <Text>2:55</Text>
        </Box>
      </Box>
      <Box
        marginHorizontal="m"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <TouchableWithoutFeedback>
          <Icon name="shuffle" size={_ICON_SIZE} color={_ICON_COLOR} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <IconAnt name="stepbackward" size={_ICON_SIZE} color={_ICON_COLOR} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Icon name="play-circle" size={_ICON_SIZE * 3} color={_ICON_COLOR} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <IconAnt name="stepforward" size={_ICON_SIZE} color={_ICON_COLOR} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Icon name="repeat" size={_ICON_SIZE} color={_ICON_COLOR} />
        </TouchableWithoutFeedback>
      </Box>
      <Box
        marginHorizontal="m"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Icon name="hard-drive" color={_ICON_COLOR} size={_ICON_SIZE} />
        <Icon name="menu" color={_ICON_COLOR} size={_ICON_SIZE} />
      </Box>
    </>
  );
};
const Lyrics = () => {
  return (
    <Box marginVertical="m" borderRadius="m" backgroundColor="notification">
      <Box margin="m">
        <Text variant="header">LYRICS</Text>
        <Box>
          <Text variant="title2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
            dignissimos doloremque dolore vitae dolor, ab quis alias saepe totam
            laboriosam quos vero! Fugiat autem debitis ea nobis atque aperiam
            eveniet.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  containerMini: {
    position: "absolute",
    justifyContent: "flex-end",
    bottom: 80,
    height: DOCK_HEIGHT,
    zIndex: 2,
  },
  container: {
    height: HEIGHT,
  },
});
const PlayScreen = () => {
  const [isMinimize, setIsMinimize] = useState(true);

  const _onMinimizeClick = () => {
    // decrease height and align to bottom dock
    setIsMinimize(true);
    console.log("OnMinimizeClick");
  };
  const _onSettingsClick = () => {
    // TODO:  Change it later to screen
    setIsMinimize(false);
  };
  const _onDockClick = () => {
    setIsMinimize(false);
  };

  return (
    <View style={isMinimize ? styles.containerMini : styles.container}>
      {isMinimize ? (
        <Box backgroundColor="border" width={wWidth} height={DOCK_HEIGHT}>
          <TouchableWithoutFeedback onPress={_onDockClick}>
            <Box
              alignItems="center"
              justifyContent="space-between"
              flexDirection="row"
              height={DOCK_HEIGHT}
              marginRight="s"
            >
              <Image
                style={{
                  height: DOCK_HEIGHT,
                  width: 70,
                }}
                source={{
                  uri:
                    "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
                }}
              />
              <Box>
                <Text>Ain't No Rest for the Wicked</Text>
                <Text>cage The Elephant</Text>
              </Box>
              <Box justifyContent="space-between" flexDirection="row">
                <Icon name="heart" size={_ICON_SIZE} color={_ICON_COLOR} />
                <Box width={20} />
                <Icon name="play" size={_ICON_SIZE} color={_ICON_COLOR} />
              </Box>
            </Box>
          </TouchableWithoutFeedback>
        </Box>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box marginHorizontal="m" marginVertical="xl">
            <PlayHeader _onMinimizeClick={_onMinimizeClick} />
            <Box marginVertical="xl">
              <Image
                style={{ width: wWidth - 40, height: wHeight * 0.4 }}
                source={{
                  uri:
                    "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
                }}
              />
            </Box>
            <PlayTrack />
            <Lyrics />
          </Box>
        </ScrollView>
      )}
    </View>
  );
};

export default PlayScreen;
