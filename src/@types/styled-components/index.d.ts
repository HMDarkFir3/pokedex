import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      primary: string;

      text: string;
      placeholder_text: string;
      icon_color: string;
    };

    fonts: {
      light: string;
      regular: string;
      bold: string;
    };
  }
}
