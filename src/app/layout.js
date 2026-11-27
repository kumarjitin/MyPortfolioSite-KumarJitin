import "./globals.css";
import { Manrope, DM_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/Site/ThemeContext";
import SiteLoader from "@/components/Site/SiteLoader";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata = {
  title: "Kumar Jitin — Software Engineer Portfolio",
  description:
    "Software Engineer skilled in C++, Java, JavaScript, Python, MERN stack, real-time geospatial systems, and AI/ML.",
  openGraph: {
    type: "website",
    title: "Kumar Jitin — Software Engineer Portfolio",
    description: "Projects, experience, research and the personal journey of Kumar Jitin.",
    siteName: "Kumar Jitin Portfolio",
  },
  icons: {
    icon: "/images/jk-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={`${manrope.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.dataset.theme=localStorage.getItem("kj-theme")==="light"?"light":"dark"}catch{}` }} />
      </head>
      <body>
        <ThemeProvider>
          <SiteLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
