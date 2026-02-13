import type { Metadata } from "next"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/AppSidebar"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { DashboardHeader } from "@/components/layout/DashboardHeader"

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
						<div className="flex w-full flex-col">
							<DashboardHeader />
							<main className="flex-1 p-6">{children}</main>
						</div>
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
