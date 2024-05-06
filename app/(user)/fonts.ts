import { Inter } from "next/font/google";
import fontLocal from "next/font/local"

export const suwannaphum = fontLocal({
    src: "./fonts/suwan.ttf",
    display: "swap",
    variable: "--font-suwan",
})

export const inter = Inter({
    subsets: ["latin"],
    weight: ["300","400","500","600","900"],
    display: "swap",
    variable: "--font-inter",
})

export const localCustomFont = fontLocal({
    src:"./fonts/osaka-re.ttf",
    display: "swap",
    variable: "--font-jetbrains", 
})