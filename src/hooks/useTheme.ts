import { useContext } from "react";

import { ThemeContext, ThemeContextData } from "@contexts/ThemeContext";

export const useTheme = (): ThemeContextData => useContext(ThemeContext);
