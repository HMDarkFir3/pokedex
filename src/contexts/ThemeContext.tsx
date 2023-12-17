import {
  createContext,
  useState,
  useEffect,
  useCallback,
  FC,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from "styled-components";

import { THEME_COLLECTION } from "@/storages/index";

import { dark } from "@/themes/dark";
import { light } from "@/themes/light";

export interface ThemeContextData {
  theme: DefaultTheme;
  onToggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  const onToggleTheme = useCallback(async () => {
    setTheme(theme.title === "light" ? dark : light);

    await AsyncStorage.setItem(
      THEME_COLLECTION,
      JSON.stringify(theme.title === "light" ? dark : light)
    );
  }, [theme]);

  const loadTheme = async () => {
    const currentTheme = await AsyncStorage.getItem(THEME_COLLECTION);

    if (currentTheme) {
      setTheme(JSON.parse(currentTheme));
    }
  };

  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
