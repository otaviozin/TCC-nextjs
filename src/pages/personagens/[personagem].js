import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';

export default function Personagem(){

    const route = useRouter();

    return(
        <div className='bg-gray-secondary h-max'>
            <Navbar />
            <div className='font-poppins text-white'>
                <h1 className='m-5'>Nome do personagem selecionado: {route.query.personagem}</h1>
            </div>
        </div>
    );
}