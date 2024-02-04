import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import {ThemeProvider} from "@/components/providers/themeProvider";
import {ConvexClientProvider} from "@/components/providers/convexProvider";
import {Toaster} from 'sonner'
import {ModalProvider} from "@/components/providers/modalProvider";
import {EdgeStoreProvider} from "@/lib/edgestore";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Yotion',
    description: 'The connected workspace where better, faster work happens.',
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/logo.svg",
                href: "/logo.svg"
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/logo-dark.svg",
                href: "/logo-dark.svg"
            }
        ]
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ConvexClientProvider>
            <EdgeStoreProvider>
            <ThemeProvider
                attribute={'class'}
                defaultTheme={'system'}
                enableSystem
                disableTransitionOnChange
                storageKey={'yotion-theme'}
            >
                <Toaster position={'bottom-center'}/>
                <ModalProvider />
                    {children}
            </ThemeProvider>
            </EdgeStoreProvider>

        </ConvexClientProvider>


        </body>
        </html>
    )
}
