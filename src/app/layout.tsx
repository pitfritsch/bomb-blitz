// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { Center, ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Center w={"100vw"} mih={"100vh"} bg={"#3e3e3e"}>
            {children}
          </Center>
        </MantineProvider>
      </body>
    </html>
  );
}
