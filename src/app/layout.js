import "./globals.css";

export const metadata = {
  title: "Messaging App",
  description: "Real time messaging at your fingertips!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
