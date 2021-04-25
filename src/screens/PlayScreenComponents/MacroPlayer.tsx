import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Box, theme } from '../../components';
import PlayHeader from './PlayHeader';
import { Dimensions, Image} from 'react-native';
import PlayTrack from './PlayTrack';
import Lyrics from './Lyrics';
const { width: wWidth, height: wHeight } = Dimensions.get("window");


interface MacroPlayerProps{
    _onMinimizeClick: () => void;

}
const MacroPlayer = ({_onMinimizeClick, }: MacroPlayerProps) => {
    return (
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

    )
}

export default MacroPlayer;