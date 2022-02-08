import { Dimensions, Image, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import { Feather as Icon } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const { width: wWidth } = Dimensions.get("window");

const DetailComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient style={{ flex: 1 }} colors={["#596164", "#000000"]}>
        <ScrollView>
          <Box py={"s"} flexDirection={"row"}>
            <TouchableOpacity>
              <Icon
                color={"#ffffff"}
                name={Platform.OS === "android" ? "arrow-left" : "chevron-left"}
                size={30}
              />
            </TouchableOpacity>

            <Box marginVertical={"l"} ml={"m"}>
              <Image
                style={{ width: wWidth - 100, height: wWidth - 120 }}
                source={require("../../../assets/Jan-Blomqvist-Remote-Control.jpg")}
              />
            </Box>
          </Box>
          <Box marginHorizontal={"s"} marginTop={"l"}>
            <Text color={"text"} fontSize={20} fontWeight={"bold"}>
              Dawn FM
            </Text>
            <Text color={"text"}>The Weeknd</Text>
            <Text color={"text"}>Album *2022</Text>
          </Box>
          <Box
            marginHorizontal={"s"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Box marginTop={"m"} flexDirection={"row"}>
              <Box marginHorizontal={"s"}>
                <Icon color={"#ffffff"} name="heart" size={20} />
              </Box>
              <Icon color={"#ffffff"} name="more-horizontal" size={20} />
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
            marginHorizontal={"s"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginTop={"m"}
          >
            <Box>
              <Text marginVertical={"s"} color={"text"}>
                Dawn FM
              </Text>
              <Text color={"text"}>The Weeknd</Text>
            </Box>
            <Box>
              <Icon size={30} color={"#ffffff"} name="more-horizontal" />
            </Box>
          </Box>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default DetailComponent;
