import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  	return(
		<div>
			<Navbar />
			<div className='m-3 lg:m-20 rounded-2xl bg-gradient-to-t from-red-900 via-gray-primary to-gray-primary font-poppins text-white mt-12'>
				<h1 className='text-2xl text-center font-bold italic py-10 lg:py-16'>Conheça o curso de desenvolvimento de sistemas do ETECVAV</h1>
				<div className='flex justify-center'>
					<button className='transition ease-out delay-150 hover:scale-110 duration-300 bg-red-700 hover:bg-red-800 text-xl font-bold py-2 px-10 rounded-full'>Fazer o download</button>
				</div>
				<div className='text-gray-300 text-lg grid lg:flex lg:justify-center text-center py-10 lg:py-16 gap-3'>
					<Link href='https://etevav.com.br/new1/historia/'>
						<a>Saiba mais</a>
					</Link>
					<Link href='https://github.com/otaviozin/TCC-nextjs'>
						<a>Github</a>
					</Link>
				</div>
			</div>
		</div>	
	);
}