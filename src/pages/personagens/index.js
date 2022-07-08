import Cards from '../../components/Cards/characters';
import Navbar from '../../components/Navbar';

export default function Personagens(){
    return(
        <div className='bg-gray-secondary h-max'>
            <Navbar />
            <div className='font-poppins text-white'>
                <div className='p-4 text-justify lg:py-12 lg:px-96'>
                    <h1 className='font-bold text-xl pb-4'>Personagens</h1>
                    <p className='pb-2'>Os personagens do jogo são inspirados nos professores e funcionários da escola, ao conversar com eles você ganha conhecimento do que irá aprender em aula.</p>
                    <p>Tome cuidado, alguns NPCs podem te dar uma advertência caso te vejam fora da sala no horário de aula.</p>
                </div>
                <Cards />
            </div>
        </div>
    );
}