import {
    createBox,
    createText,
    useTheme as useReTheme,
  } from "@shopify/restyle";
  import { TextStyle, ViewStyle } from "react-native";
  
  
  type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle };
  
  export const theme = {
    colors: {
      primary: 'rgb(28, 28, 30)',
      background: 'rgb(28, 28, 30)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(255, 255, 255)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
      borderLine: '#54b05f',
      white: '#ffffff',
      main: '#1DB954',
      // changing  Here
      darkLight: "#434343",
      dark: "#000000",
      bright: "#ffffff",
      soil: 'rgb(199, 199, 204)',
    },
    spacing: {
      s: 8,
      m: 16,
      l: 24,
      xl: 40,
    },
    borderRadii: {
      s: 4,
      m: 10,
      l: 25,
      xl: 75,
    },
    textVariants: {
      listTitle: {
        fontSize: 30,
        color: 'bright',
        fontWeight: 'bold',
        lineHeight: 40
      },
      listContentTitle: {
        fontSize: 15,
        color: 'bright',
        fontWeight: 'bold',
        lineHeight: 20,
      },
      listContentSubTitle: {
        fontSize: 15,
        color: 'soil',
        fontWeight: 'bold'
      },
      premiumFreeText: {
        fontSize: 14,
        color: 'darkLight',
        fontWeight: '600'
      },
      premiumCardLabel: {
        fontSize: 22,
        fontWeight: 'bold',
        color:'text'
      },
      hero: {
        fontSize: 80,
        lineHeight: 80,

        color: "text",
        textAlign: "center",
      },
      title1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "border",
      },
      title2: {
        fontSize: 24,
        lineHeight: 30,
     
        color: "text",
      },
      body: {
        fontSize: 16,
        lineHeight: 24,
        color: "border",
        fontWeight: 'bold'
      },
      button: {
        fontSize: 15,
        color: "text",
      },
      header: {
        fontSize: 12,
        lineHeight: 24,
        color: "text",
      },
      premiumCardTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight:'bold'
      }
    },
    breakpoints: {},
  };
  
  export type Theme = typeof theme;
  
  export const Text = createText<Theme>();
  export const Box = createBox<Theme>();
  export const useTheme = () => useReTheme<Theme>();
  
  export const makeStyles = <T extends NamedStyles<T>>(
    styles: (theme: Theme) => T
  ) => () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };