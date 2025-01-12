import type { Metadata } from "next"
import "./globals.css"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/AppSidebar"
import { ThemeProvider } from "@/components/layout/ThemeProvider"

export const metadata: Metadata = {
	title: "shadcn-next-dashboard",
	description: "Example of a Next.js dashboard with shadcn/ui",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SidebarProvider>
						<AppSidebar />
						<div className="w-full p-5">
							<SidebarTrigger />
							{children}
						</div>
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
