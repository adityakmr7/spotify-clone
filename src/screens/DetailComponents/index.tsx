import { Image, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";

const DetailComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 10 }}>
      <ScrollView>
        <Box flexDirection={"row"}>
          <Icon
            name={Platform.OS === "android" ? "arrow-left" : "chevron-left"}
            size={30}
          />
          <Box ml={"m"}>
            <Image
              style={{ width: 300, height: 300 }}
              source={require("../../../assets/Jan-Blomqvist-Remote-Control.jpg")}
            />
          </Box>
        </Box>
        <Box marginTop={"l"}>
          <Text fontSize={20} fontWeight={"bold"}>
            Dawn FM
          </Text>
          <Text>The Weeknd</Text>
          <Text>Album *2022</Text>
        </Box>
        <Box flexDirection={"row"} justifyContent={"space-between"}>
          <Box marginTop={"m"} flexDirection={"row"}>
            <Icon name="heart" size={20} />
            <Icon name="more-horizontal" size={20} />
          </Box>
          <Box>
            <TouchableOpacity>
              <Box
                bg={"main"}
                justifyContent={"center"}
                alignItems={"center"}
                width={50}
                height={50}
                borderRadius={"xl"}
              >
                <Icon color={"#ffffff"} size={20} name="play" />
              </Box>
            </TouchableOpacity>
          </Box>
        </Box>
        <Box
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginTop={"m"}
        >
          <Box>
            <Text>Dawn FM</Text>
            <Text>The Weeknd</Text>
          </Box>
          <Box>
            <Icon name="more-horizontal" />
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailComponent;
