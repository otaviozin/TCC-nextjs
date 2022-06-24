import Navbar from '../components/Navbar';

export default function Home() {
  	return(
		<div>
			<Navbar />
			<div className='bg-gray-primary h-screen w-11/12 rounded-t-3xl flex flex-col mx-auto font-poppins text-white mt-12'>
				<h1 className='text-3xl font-bold italic text-center pt-12'>Conheça o curso de desenvolvimento de sistemas do ETECVAV</h1>
				<button className='bg-red-700 py-2 px-16 text-lg mx-auto mt-12 w-80 font-bold rounded-full'>Fazer o download</button>
			</div>
		</div>	
	);
}