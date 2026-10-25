import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexis.G.Mayer()",
  description: "Welcome to my professional portfolio which will briefly demonstrate my technical experience and showcase my UX skills to convince you that I should be your next team member.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <head>
          {/* Apply the saved theme before first paint to avoid a light-mode flash */}
          <script dangerouslySetInnerHTML={{ __html:
            `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}` }} />
      </head>
      <body className="bg-primary dark:bg-primary-dark">
        {children}
      </body>
    </html>
  );
}
