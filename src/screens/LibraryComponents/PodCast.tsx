import React from 'react';
import { Box,SPrimaryButton,Text } from '../../components';

const PodCast = () => {
    return (
        <Box>
            <Box height={600} justifyContent="center" alignItems='center'>
            <Text variant="title1">Looking for a show to</Text>
                <Text variant='title1'>listen to ?</Text>
                <Box height={ 100}/>
            <SPrimaryButton label="BROWSE" onPress={() => {}} />
            </Box>
        </Box>
    )

}


export default PodCast;