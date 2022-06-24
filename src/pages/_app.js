import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  	return(
		<div>
			<Head>
				<title>VAV Simulator</title>
			</Head>
			<Component {...pageProps} />
		</div>
 	)
}

export default MyApp;
