import Image from 'next/image';
import data from '../../data/index.json';
import Link from 'next/link';
import Cards from '../../components/Cards';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import { getChars } from '../../api/getChars';

export default function Personagem(){

    const [char, setChar] = useState({
        id: '',
        name: '',
        desc: '',
        local: [{
            id: '',
            name: ''
        }]
    });
    const route = useRouter();

    useEffect(() => {
        const getData = async () => {
            const res = await getChars(route.query.personagem);
            setChar(res[0]);
            if(res[0]===undefined) return;
        }
        getData();
    }, [route]);
    
    if(char===undefined) return;
    
    return(
        <div className='bg-gray-secondary h-max xl:pb-10'>
            <Navbar />
            <div className='bg-gray-primary font-poppins lg:rounded-2xl text-white mt-4 xl:mx-40 2xl:mx-80'>
                <div className='lg:grid lg:grid-cols-2 p-4 text-center 2xl:px-40 lg:pt-12 lg:px-40'>
                    <div className='flex justify-center 2xl:justify-'>
                        <Image src='https://freesvg.org/img/abstract-user-flat-4.png' alt='Character image' width={100} height={100} />
                    </div>
                    <div className='lg:text-left'>
                        <h1 className='text-2xl'>{char.name}</h1>
                        <p className='py-1'>{char.desc}</p>
                    </div>
                </div>
                <div className='lg:grid lg:px-44 2xl:flex 2xl:justify-around'>
                    <Cards type='local' name={route.query.personagem} />
                </div>
            </div>
        </div>
    );

}