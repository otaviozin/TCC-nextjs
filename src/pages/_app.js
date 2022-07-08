import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  	return(
		<div className='bg-gray-secondary h-screen'>
			<Head>
				<title>VAV Simulator</title>
				<style>
					@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,700&display=swap);
				</style>
			</Head>
			<Component {...pageProps} />
		</div>
 	)
}

export default MyApp;
