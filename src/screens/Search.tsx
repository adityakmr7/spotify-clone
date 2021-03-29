import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { Feather as Icon } from "@expo/vector-icons";

import { theme, Header, Box, Text } from "../components";

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Box marginVertical="m">
        <Header title="Search" />
      </Box>
      <Box
        borderRadius="s"
        paddingHorizontal="m"
        flexDirection="row"
        alignItems="center"
        backgroundColor="text"
      >
        <Icon name="search" color={theme.colors.primary} size={30} />
        <TextInput
          style={styles.searchInput}
          placeholder="Artists, songs, or podcasts"
        />
      </Box>
      <ScrollView>
        <Box marginHorizontal="m">
          <Text marginVertical="l" variant="title1">
            Your top genres
          </Text>
          <Box  flexDirection="row" justifyContent="space-between">
            <Box flexDirection="row" borderRadius="s" height={90} flex={1}  backgroundColor="notification">
              <Box flex={1}>
              <Text color="text" marginVertical="m" marginHorizontal="m" variant="body">Rock</Text>
              </Box>
              {/* <Image style={{
                width: 60, height: 110,
                position: 'relative',
                right: -15,
                top: -5,
                overflow:'hidden',
                transform: [
                  { rotateX: "45deg" },
                  { rotateZ: "15deg", }
                ]
              }} source={{ uri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg' }} /> */}
            </Box>

            <Box width={20}/>
            <Box borderRadius="s" flex={1} backgroundColor="notification">
              <Text color="text"  marginVertical="m" marginHorizontal="m" variant="body" >Dance/ Electronic</Text>
            </Box>
          </Box>
        </Box>

        <Box marginHorizontal="m">
          <Text marginVertical="l" variant="title1">
            Browse all 
          </Text>
          {[1, 2, 3, 4, 5].map((item, i) => (
            <Box marginVertical="s" flexDirection="row" justifyContent="space-between">
            <Box borderRadius="s" height={90} flex={1}  backgroundColor="notification">
              <Text color="text"  marginVertical="m" marginHorizontal="m"  variant="body">Podcasts</Text>
            </Box>
            <Box width={20}/>
            <Box borderRadius="s" flex={1} backgroundColor="notification">
              <Text color="text" marginVertical="m" marginHorizontal="m" variant="body" >New Releases</Text>
            </Box>
          </Box>
          ))}
          
        </Box>  


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  searchInput: {
    backgroundColor: theme.colors.text,
    width: "100%",
    fontSize: 20,
    color: theme.colors.primary,
    fontWeight: "bold",
  },
});

export default Search;
