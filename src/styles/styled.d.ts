import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      card: string;
      background: string;
      text: string;
      textTitle: string;
      buttonText: string;
    },
  }
}