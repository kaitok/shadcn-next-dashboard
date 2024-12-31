import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "shadcn-next-dashboard",
	description: "Example of a Next.js dashboard with shadcn/ui",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
