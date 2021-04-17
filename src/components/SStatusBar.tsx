import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View } from "react-native";

interface SStatusBarProps {
    backgroundColor: string;

}

const SStatusBar = ({ backgroundColor }: SStatusBarProps) => {
  return (
    <View>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" translucent {...backgroundColor} />
      </SafeAreaView>
    </View>
  );
};

export default SStatusBar;
