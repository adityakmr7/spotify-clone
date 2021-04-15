import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
  View,
} from "react-native";
import { Box, SPrimaryButton, Text, theme } from "../components";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const CARD_HEIGHT = 160;

const PremiumButton = ({
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

const PremiumGroupCard = () => {
  return (
    <Box backgroundColor="notification" borderRadius="l">
      <Box
        marginVertical="xl"
        marginHorizontal="m"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text variant="title2">Premium Family</Text>
        <Text variant="title1">From $15</Text>
      </Box>
      <Box marginBottom="xl" marginHorizontal="xl">
        <Text variant="body" textAlign="center" marginVertical="m">
          Choose 1,3,6 or 12 months of Premium * Pay with Paytm or UPI. Top up
          when you want
        </Text>
        <Box alignSelf="center">
          <PremiumButton label="VIEW PLANS" onPress={() => {}} />
        </Box>
        <Text variant="body" textAlign="center">
          Prices vary according to duration of plan.Terms and conditions apply
        </Text>
      </Box>
    </Box>
  );
};

const SlideCard = () => {
  return (
    <Box
      flexDirection="row"
      height={160}
      borderRadius="xl"
      width={wWidth - 52}
      marginHorizontal="m"
      backgroundColor="notification"
    >
      <Box alignItems="center" flex={1} backgroundColor="borderLine">
        <Text marginVertical="s">FREE</Text>
        <Box height={50} />
        <Text>Ad breaks</Text>
      </Box>
      <Box alignItems="center" flex={1} backgroundColor="text">
        <Text marginVertical="s">PREMIUM</Text>
        <Box height={50} />
        <Text>Ad-free music</Text>
       </Box>
    </Box>
  );
};

const Premium = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Box flex={1} backgroundColor="primary">
          <Box marginHorizontal="xl" marginVertical="xl">
            <Text textAlign="center" variant="premiumCardTitle">
              Get more out of your music with Premium
            </Text>
          </Box>
          <Box>
            <Box marginHorizontal="m" width={wWidth - 32}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              >
                {[1, 2, 3, 4].map((_, i) => {
                  return <SlideCard key={i} />;
                })}
              </ScrollView>
            </Box>
            <Box alignSelf="center" marginVertical="xl">
              <SPrimaryButton label="GET PREMIUM" onPress={() => {}} />
              <Text marginVertical="s" textAlign="center" variant="body">
                Terms and conditions apply
              </Text>
            </Box>
            <Box marginHorizontal="m" marginVertical="s">
              <Box
                borderRadius="m"
                backgroundColor="borderLine"
                height={60}
                paddingHorizontal="m"
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
              >
                <Text variant="title2">Spotify Free</Text>
                <Text variant="body">CURRENT PLAN</Text>
              </Box>
            </Box>

            <Box marginVertical="xl" marginHorizontal="m">
              {[1, 2, 3, 4, 5, 6].map((_, i) => {
                return (
                  <Box key={i} marginBottom="m">
                    <PremiumGroupCard />
                  </Box>
                );
              })}
            </Box>
          </Box>
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
});

export default Premium;
