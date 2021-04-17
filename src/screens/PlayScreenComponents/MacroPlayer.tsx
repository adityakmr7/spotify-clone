import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Box, theme } from '../../components';
import PlayHeader from './PlayHeader';
import { Dimensions, Image} from 'react-native';
import PlayTrack from './PlayTrack';
import Lyrics from './Lyrics';
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const HEIGHT = wHeight;
const DOCK_HEIGHT = wHeight * 0.08;
const _ICON_SIZE = 26;
const _ICON_COLOR = theme.colors.darkLight;

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