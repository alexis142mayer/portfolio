import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexis.G.Mayer()",
  description: "Welcome to my professional portfolio which will briefly demonstrate my technical experience and showcase my UX skills to convince you that I should be you're next team member. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
          <link href="/dist/styles.css" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
