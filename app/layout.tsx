import "./globals.css";

export const metadata = {
  title: "Rejigprocess Technology | Software Development & Consulting",
  description:
    "Rejigprocess Technology is a Nigerian software development, IT consulting, and training company."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
