import Navbar from '../components/Navbar';

export default function Sobre(){
    return(
        <div className='bg-gray-secondary h-max'>
            <Navbar />
            <div className='bg-gray-primary font-poppins lg:rounded-2xl text-white mt-4 2xl:mt-16 xl:mx-40 2xl:mx-80'>
                <div className='p-4 text-justify lg:py-12 lg:px-40'>
                    <h1 className='font-bold text-xl pb-4'>VAV Simulator</h1>
                    <p className='pb-6'>VAV Simulator é um jogo criado com o intuito de apresentar e introduzir o curso de desenvolvimento de sistemas na ETEC Vasco Antônio Venchiarutti. Foi pensando como projeto de TCC do 3º ano de 2022, sendo produzido pelo Mateus Piros, Marcos e Otávio.</p>
                    <h1 className='font-bold text-xl pb-4'>ETECVAV</h1>
                    <p>A ETEC Vasco Antônio Venchiarutti (ou ETECVAV) é uma das melhores escolas do estado de São Paulo. Seu nome é uma homenagem ao arquiteto Vasco Antonio Venchiarutti, que lutou para criar a escola.</p>
                </div>
            </div>
        </div>
    );
}