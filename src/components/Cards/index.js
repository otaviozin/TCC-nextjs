import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import data from '../../data/index.json';
import { getChars } from '../../api/getChars';

export default function Cards(props){

    const [char, setChar] = useState({
        id: '',
        name: '',
        desc: '',
        local: [{
            id: '',
            name: ''
        }]
    });

    useEffect(() => {
        const getData = async () => {
            const res = await getChars(props.name);
            setChar(res[0]);
            if(res[0]===undefined) return;
        }
        getData();
    });
    
    console.log(char)

    if(props.type==='char'){
        return(
            <div className='flex flex-wrap justify-center xl:justify-around gap-2 2xl:gap-x-36 2xl:gap-y-20 py-7'>
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
    if(props.type==='local'){
        return(
            <div className='flex 2xl:grid 2xl:grid-cols-3 flex-wrap justify-center xl:justify-around gap-2 2xl:gap-x-36 2xl:gap-y-20 py-7'>
                {char.local.map(local => (
                    <div key={local.id} className='transition ease-out hover:bg-gradient-to-t from-red-900 via-gray-primary to-gray-cards hover:scale-110 duration-150 bg-gray-cards w-fit px-7 py-5 mt-3 rounded-md text-center font-bold text-xl cursor-pointer'>
                        <Image src='https://freesvg.org/img/abstract-user-flat-4.png' alt='Character image' width={100} height={100} priority='true' />
                        <h3 className='mt-4'>{local.name}</h3>
                    </div>
                ))}
            </div>
        );
    }
}
