import Image from 'next/image';
import Link from 'next/link';
import data from '../../data/index.json';

export default function Characters(){
    return(
        <div className='flex flex-wrap justify-center xl:justify-between gap-2 2xl:gap-36 py-7'>
            {data.map(chars => (
                <Link href={`personagens/${chars.name}`} passHref key={chars.id}>
                    <div className='transition ease-out hover:bg-gradient-to-t from-red-900 via-gray-primary to-gray-cards hover:scale-110 duration-150 bg-gray-cards w-fit px-7 py-5 mt-3 rounded-md text-center font-bold text-xl cursor-pointer'>
                        <Image src='https://freesvg.org/img/abstract-user-flat-4.png' alt='Character image' width={100} height={100} />
                        <h3 className='mt-4'>{chars.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}