"use client"
import type { ComponentProps } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useState, useEffect } from "react"

export function ThemeProvider({
	children,
	...props
}: ComponentProps<typeof NextThemesProvider>) {
	const [mounted, setMounted] = useState<boolean>(false)
	useEffect(() => {
		setMounted(true)
		return () => setMounted(false)
	}, [])

	return (
		mounted && <NextThemesProvider {...props}>{children}</NextThemesProvider>
	)
}
