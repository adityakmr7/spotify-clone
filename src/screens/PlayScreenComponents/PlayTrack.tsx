import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ProgressBar } from 'react-native-paper';
import { Box ,Text} from '../../components';
import { Feather as Icon, AntDesign as IconAnt } from '@expo/vector-icons';

const PlayTrack = () => {
    const _ICON_COLOR_TRACK = '#FFFFFF';
    const _ICON_SIZE = 26;
  return (
    <>
      <Box
        marginHorizontal="m"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginVertical="xl"
      >
        <Box>
          <Text variant="listTitle" color="bright">Ain't No Rest for the wicked</Text>
          <Text variant="listContentSubTitle" color="bright">Cage The Elephant</Text>
        </Box>
        <Box>
          <Icon name="heart" size={26} color={_ICON_COLOR_TRACK} />
        </Box>
      </Box>
      <Box marginHorizontal="m">
        <ProgressBar progress={0.5} color={_ICON_COLOR_TRACK} />
        <Box
          marginVertical="s"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text color="bright">1:34</Text>
          <Text color="bright">2:55</Text>
        </Box>
      </Box>
      <Box
        marginHorizontal="m"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <TouchableWithoutFeedback>
          <Icon name="shuffle" size={_ICON_SIZE} color={_ICON_COLOR_TRACK} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <IconAnt name="stepbackward" size={_ICON_SIZE} color={_ICON_COLOR_TRACK} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Icon name="play-circle" size={_ICON_SIZE * 3} color={_ICON_COLOR_TRACK} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <IconAnt name="stepforward" size={_ICON_SIZE} color={_ICON_COLOR_TRACK} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Icon name="repeat" size={_ICON_SIZE} color={_ICON_COLOR_TRACK} />
        </TouchableWithoutFeedback>
      </Box>
      <Box
        marginHorizontal="m"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Icon name="hard-drive" color={_ICON_COLOR_TRACK} size={_ICON_SIZE} />
        <Icon name="menu" color={_ICON_COLOR_TRACK} size={_ICON_SIZE} />
      </Box>
    </>
  );
};

export default PlayTrack;