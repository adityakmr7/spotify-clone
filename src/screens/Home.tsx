import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Text,
  theme,
  Header,
  SStatusBar,
  AppThumbnail,
} from "../components";
import albumCategory from "../data/albumCategory";
import { fetchUserPlaylist, playlistSelector } from "../redux/slices/playlist";
import { getData } from "../utils/storage";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector(playlistSelector);
  useEffect(() => {
    dispatch(fetchUserPlaylist());
  }, []);

  console.log("gettingdata", data);
  if (isLoading) {
    return (
      <Box>
        <ActivityIndicator />
      </Box>
    );
  }
  return (
    // <SafeAreaView style={ styles.container}>

    <LinearGradient colors={["#596164", "#000000"]}>
      <SStatusBar backgroundColor="#000000" />
      <ScrollView>
        <Box marginVertical="l">
          <Header title="Recently played" iconName="settings" />
        </Box>
        <Box>
          <ScrollView>
            {albumCategory.map((item, i) => {
              return (
                <Box key={i}>
                  <Text
                    marginVertical="m"
                    variant="listTitle"
                    marginHorizontal="m"
                  >
                    {item.title}
                  </Text>
                  <Box>
                    <ScrollView
                      showsHorizontalScrollIndicator={false}
                      horizontal={true}
                    >
                      {data?.items?.map((aItem: any, i: number) => {
                        return (
                          <Box elevation={2} key={i} margin="s">
                            <Box borderRadius="m">
                              <Image
                                style={styles.thumbImage}
                                source={{ uri: aItem.images[0].url }}
                              />
                              <Box width={120} marginVertical="s">
                                <Text
                                  numberOfLines={1}
                                  variant="listContentTitle"
                                >
                                  {aItem.name}
                                </Text>
                                <Text variant="listContentSubTitle">
                                  {aItem?.owner?.display_name}
                                </Text>
                              </Box>
                            </Box>
                          </Box>
                        );
                      })}
                    </ScrollView>
                  </Box>
                </Box>
              );
            })}
          </ScrollView>
        </Box>
      </ScrollView>
    </LinearGradient>
    // </SafeAreaView>
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

export default Home;
