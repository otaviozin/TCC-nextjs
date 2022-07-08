import Link from 'next/link';

export default function Personagem(){
    return(
        <div className='text-white font-poppins'>
            <Link href='/'>
                <a className='bg-red-700'>Início</a>
            </Link>
        </div>
    );
}