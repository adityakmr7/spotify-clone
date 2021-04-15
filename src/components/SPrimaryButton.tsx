import React from 'react';
import { Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Box,Text } from './theme';

const { width:wWidth} = Dimensions.get('window');
const SPrimaryButton= ({

  label,
  onPress,
}: {
  label: String;
  onPress: () => void;
}) => {
  return (
    <TouchableWithoutFeedback {...{ onPress }}>
      <Box
        width={wWidth * 0.6}
        borderRadius="xl"
        justifyContent="center"
        alignItems="center"
        height={60}
        backgroundColor="card"
      >
        <Text>{label}</Text>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default SPrimaryButton;