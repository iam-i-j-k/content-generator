import React from "react"
import { ClerkProvider } from "@clerk/nextjs"
import Navbar from "../components/Navbar"
import "../app/globals.css"

const RootLayout = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gray-100 overflow-x-hidden">
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout

