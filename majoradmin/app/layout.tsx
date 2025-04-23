import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import Header from './Components/Header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white pt-16">
        <Header />
        <MantineProvider defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
