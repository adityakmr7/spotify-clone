import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Box, Text, theme } from "../components";
import { Feather as Icon } from '@expo/vector-icons';
import albumCategory from '../data/albumCategory';

const Header = ({title , iconName}: {title:string, iconName?: string }) => {
  return (
    <Box >
      <Box marginHorizontal="m" height={60} flexDirection="row" alignItems="center" justifyContent="space-between" >
        <Text variant="title1">{title}</Text>
        {iconName ?
          <Icon name={iconName} size={26} color={theme.colors.text} />
          : null}
      </Box>
    </Box>
  )
}

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
                    <Text marginVertical="m" variant="title1" marginHorizontal="s" color="text">
                      {item.title}
                    </Text>
                    <Box>
                      <ScrollView  horizontal={true}>
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

