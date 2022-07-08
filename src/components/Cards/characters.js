import Image from 'next/image';
import Link from 'next/link';
import data from '../../data/index.json';

export default function Characters(){
    return(
        <div className='flex flex-wrap justify-center gap-2 lg:gap-36 py-7'>
            {data.map(chars => (
                <Link href={`personagens/${chars.name}`} passHref key={chars.id}>
                    <div className='bg-gray-cards w-fit px-5 py-3 rounded-md text-center font-bold text-xl cursor-pointer'>
                        <Image src='https://freesvg.org/img/abstract-user-flat-4.png' alt='Character image' width={130} height={130} />
                        <h3>{chars.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}