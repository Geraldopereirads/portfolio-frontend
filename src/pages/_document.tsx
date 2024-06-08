import ThemeProvider from "@/components/ThemeProvider";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document({ children }: { children: React.ReactNode }) {
  return (
    <Html lang="en">
      <title>Portfólio Full-Stack</title>
      <Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Head>
    </Html>
  );
}
