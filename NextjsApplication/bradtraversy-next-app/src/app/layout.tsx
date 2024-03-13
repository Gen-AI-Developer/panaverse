use client
import '@/app/globals.css'
import React, { ReactNode } from 'react'
export const metadata = {
    title: 'ThisISwebsite | NextJS Web ENGine'
}
const MainLayout = ({ children }: { children: ReactNode }) => {

    return (
        <html>
            <body>
                <div>{children}</div>
            </body>
        </html>
    )
}

export default MainLayout