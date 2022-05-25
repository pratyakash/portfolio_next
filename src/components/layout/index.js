import Head from 'next/head';

import Header from '../header';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Pratyakash Saini</title>
				<meta name="description" content="Pratyakash Saini" />
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<Header />
			<main>{children}</main>
		</>
	);
}
