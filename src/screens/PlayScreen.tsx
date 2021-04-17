import React, { useState } from "react";

import {
  Dimensions,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import { Box, Text, theme } from "../components";
import { Feather as Icon } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";
import { AntDesign as IconAnt } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import PlayHeader from "./PlayScreenComponents/PlayHeader";
import PlayTrack from "./PlayScreenComponents/PlayTrack";
import Lyrics from "./PlayScreenComponents/Lyrics";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const HEIGHT = wHeight;
const DOCK_HEIGHT = wHeight * 0.08;
const _ICON_SIZE = 26;
const _ICON_COLOR = theme.colors.darkLight;

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
        <Box backgroundColor="primary" width={wWidth} height={DOCK_HEIGHT}>
          <TouchableWithoutFeedback onPress={_onDockClick}>
            <Box
              borderColor="dark"
              borderBottomWidth={1}
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
                <Text variant="body">Ain't No Rest for the Wicked</Text>
                <Text color="text" variant="body">
                  cage The Elephant
                </Text>
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
        <LinearGradient colors={["#485563", "#29323c"]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box marginHorizontal="m" marginVertical="xl">
              <PlayHeader _onMinimizeClick={_onMinimizeClick} />
              <Box marginVertical="m">
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
        </LinearGradient>
      )}
    </View>
  );
};

export default PlayScreen;
