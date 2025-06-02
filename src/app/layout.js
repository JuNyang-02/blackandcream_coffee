import "./styles/globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
    src: "./fonts/PretendardVariable.woff2",
    variable: "--font-pretendard",
    display: "swap",
    weight: "45 920",
});

const montserrat = localFont({
    src: "./fonts/Montserrat.woff2",
    variable: "--font-montserrat",
    display: "swap",
    subsets: ["latin"],
});

export const metadata = {
    title: "BLACK & CREAM COFFEE BAR | [블랙앤크림커피바]",
    description: "'Find a harmonious taste' 조화로운 맛을 찾다의 슬로건을 가진 블랙앤크림 커피바 입니다.",
    icons: {
        icon: "/icons/favicon.ico",
    },
    metadataBase: new URL("https://junyang-02.github.io/"),
    openGraph: {
        siteName: "BLACK & CREAM COFFEE BAR | [블랙앤크림커피바]",
        title: "BLACK & CREAM COFFEE BAR | [블랙앤크림커피바]",
        description: "'Find a harmonious taste' 조화로운 맛을 찾다의 슬로건을 가진 블랙앤크림 커피바 입니다.",
        images: "",
        url: "https://junyang-02.github.io/",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="kr">
            <body className={`${pretendard.className} ${montserrat.variable}`}>
                {children}
            </body>
        </html>
    );
}
