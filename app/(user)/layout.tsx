import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import { inter, suwannaphum, localCustomFont } from "./fonts";
import { Metadata } from "next";
import StoreProvider from "../StoreProvider";
import SessionWrapper from "../SessionProvider";
import { FooterComponent } from "@/components/navbar/Footer";

export const metadata: Metadata = {
	title: "Makara online Shop",
	description: "Makara online Shop is a web application for selling products.",
	openGraph: {
		title: "Makara online Shop",
		description:
			"Makara online Shop is a web application for selling products.",
		images: "https://store.istad.co/media/brand_images/sokea_AF6QosU.jpg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<SessionWrapper>
				<body
					className={` m-0 p-0 ${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}`}
				>
					<StoreProvider>
						<header>
							<NavbarComponent />
						</header>
						<main>
							<ErrorBoundary errorComponent={Error}>
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</ErrorBoundary>
						</main>
					</StoreProvider>

				</body>
			</SessionWrapper>
		</html>
	);
}
