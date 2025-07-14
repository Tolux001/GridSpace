import type { Metadata } from "next";
import { Inter as InterFont } from "next/font/google";
import "./globals.css";

const inter = InterFont({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Grid SPace",
	description: "Find a flexible space near you",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} antialiased`}>{children}</body>
		</html>
	);
}
