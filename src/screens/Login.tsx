import React, { useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ResponseType, useAuthRequest } from "expo-auth-session";
import { CLIENT_ID, CLIENT_SECRET } from "../config/spotifyCredentials";
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width: wWidth, height: wHeight } = Dimensions.get("window");

const Login = ({navigation}:any) => {
  const discovery = {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  };

  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      scopes: [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state",
        "streaming",
        "user-read-email",
        "user-read-private",
      ],
      usePKCE: false,
      redirectUri: "exp://127.0.0.1:19000/",
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { access_token } = response.params; 
      storeData(access_token);
    }
  }, [response]);

  const storeData = async(token:string) => {
    try {
        await AsyncStorage.setItem('@access_token', token)
      } catch (e) {
        // saving error
        console.log('Error', e);
      }
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => promptAsync()}>
        <View
          style={{
            backgroundColor: "green",
            width: wWidth * 0.9,
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
