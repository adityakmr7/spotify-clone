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
import { albumRelease, albumSelector } from "../redux/slices/album";
import { categorySelector, fetchCategories } from "../redux/slices/category";
import { fetchUserPlaylist, playlistSelector } from "../redux/slices/playlist";
import { getData } from "../utils/storage";

const Home = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector(playlistSelector);
  const { category } = useSelector(categorySelector);
  const { release } = useSelector(albumSelector);
  useEffect(() => {
    dispatch(fetchUserPlaylist());
    dispatch(fetchCategories());
    dispatch(albumRelease());
  }, []);

  const handleNavigation = (data: any) => {
    navigation.navigate("Detail");
  };
  if (isLoading) {
    return (
      <Box>
        <ActivityIndicator />
      </Box>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient style={{ flex: 1 }} colors={["#596164", "#000000"]}>
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
                        {item.title === "Popular Playlists" &&
                          data?.items?.map((aItem: any, i: number) => {
                            return (
                              <AppThumbnail
                                onPress={() => handleNavigation(aItem)}
                                images={aItem.images[0].url}
                                owner={aItem?.owner?.display_name}
                                name={aItem.name}
                              />
                            );
                          })}
                        {item.title === "Categories" &&
                          category?.categories?.items.map(
                            (item: any, i: number) => {
                              return (
                                <AppThumbnail
                                  onPress={() => handleNavigation(item)}
                                  name={item.name}
                                  owner={item.id}
                                  images={item.icons[0].url}
                                />
                              );
                            }
                          )}
                        {item.title === "Happy Vibes" &&
                          release?.albums?.items.map((item: any, i: number) => {
                            return (
                              <AppThumbnail
                                onPress={() => handleNavigation(item)}
                                images={item.images[0].url}
                                owner={item?.owner?.display_name}
                                name={item.name}
                              />
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
    </SafeAreaView>
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
