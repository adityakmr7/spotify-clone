import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet } from "react-native";

import { Box, Text, theme ,Header } from "../components";
import albumCategory from '../data/albumCategory';


const Home = () => {
    return (
      <SafeAreaView style={ styles.container}>
        <ScrollView>
            <Box marginVertical="l">
            <Header title="Recently played" iconName="settings"/>
          </Box>
          <Box>
            <ScrollView>
              {albumCategory.map((item, i) => {
                return (
                  <Box key={i}>
                    <Text marginVertical="m" variant="title1" marginHorizontal="m" color="text">
                      {item.title}
                    </Text>
                    <Box>
                      <ScrollView showsHorizontalScrollIndicator={false}  horizontal={true}>
                      {item.albums.map((aItem, i) => {
                        return (
                          <Box margin="s">
                            <Image  style={styles.thumbImage} source={{uri: aItem.imageUri}}/>
                            <Box width={120} marginVertical="s">
                              <Text variant="body">{aItem.artistsHeadline}</Text>
                              </Box>
                          </Box>
                        )
                      })}
                         </ScrollView>
                    </Box>
                  </Box>
                )
              })}
            </ScrollView>
          </Box>
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      flex: 1
  },
  thumbImage: {
    height: 120,
    width: 120
  }
  });
  
export default Home;

