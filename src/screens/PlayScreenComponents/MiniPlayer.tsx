import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Box ,Text, theme} from '../../components';
import { Dimensions, Image } from 'react-native';
import {Feather as Icon } from '@expo/vector-icons';
const { width: wWidth, height: wHeight } = Dimensions.get("window");

const HEIGHT = wHeight;
const DOCK_HEIGHT = wHeight * 0.08;
const _ICON_SIZE = 26;
const _ICON_COLOR = theme.colors.darkLight;

interface MiniPlayerProps {
    _onDockClick: () => void;
    DOCK_HEIGHT: number;
}

const MiniPlayer = ({_onDockClick, DOCK_HEIGHT}:MiniPlayerProps) => {
    return (
 <Box backgroundColor="primary" width={wWidth} height={DOCK_HEIGHT}>
          <TouchableWithoutFeedback onPress={_onDockClick}>
            <Box
              borderColor="dark"
              borderBottomWidth={1}
              alignItems="center"
              justifyContent="space-between"
              flexDirection="row"
              height={DOCK_HEIGHT}
              marginRight="s"
            >
              <Image
                style={{
                  height: DOCK_HEIGHT,
                  width: 70,
                }}
                source={{
                  uri:
                    "https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg",
                }}
              />
              <Box>
                <Text variant="body">Ain't No Rest for the Wicked</Text>
                <Text color="text" variant="body">
                  cage The Elephant
                </Text>
              </Box>
              <Box justifyContent="space-between" flexDirection="row">
                <Icon name="heart" size={_ICON_SIZE} color={_ICON_COLOR} />
                <Box width={20} />
                <Icon name="play" size={_ICON_SIZE} color={_ICON_COLOR} />
              </Box>
            </Box>
          </TouchableWithoutFeedback>
        </Box>
    )
}

export default MiniPlayer;