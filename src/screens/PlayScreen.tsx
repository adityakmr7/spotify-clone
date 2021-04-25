import React, { useState } from "react";

import { Dimensions, StyleSheet, View } from "react-native";

import { Box, Text, theme } from "../components";

import MiniPlayer from "./PlayScreenComponents/MiniPlayer";
import MacroPlayer from "./PlayScreenComponents/MacroPlayer";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const HEIGHT = wHeight;
const DOCK_HEIGHT = wHeight * 0.08;


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
  const [dockHeight, setDockHeight] = useState( wWidth * 0.2);
  const _onMinimizeClick = () => {
    // decrease height and align to bottom dock
    setIsMinimize(true);
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
        <MiniPlayer {...{ _onDockClick, dockHeight}} />
      ) : (
        <MacroPlayer {...{ _onMinimizeClick }} />
      )}
    </View>
  );
};

export default PlayScreen;
