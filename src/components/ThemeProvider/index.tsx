"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  return <NextThemeProvider>{children}</NextThemeProvider>;
};

export default ThemeProvider;
