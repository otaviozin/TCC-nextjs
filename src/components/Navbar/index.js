import { useState } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {

	const [isShowing, setIsShowing] = useState(false);

  	return(
		<nav className='bg-gray-primary px-4 py-2'>
			<div className='flex items-center justify-around'>
				<Link href='/'>
					<a className='flex items-center font-poppins text-white text-2xl font-bold italic gap-3'>
						<Image src='http://etevav.com.br/new1/wp-content/uploads/2016/04/cropped-cropped-logo.png' alt='etevav logo' width={50} height={50} />
						vav simulator
					</a>
				</Link>
				<button className='lg:hidden' onClick={() => setIsShowing((isShowing) => !isShowing)}>
					<span className='sr-only'>Open main menu</span>
                	{!isShowing ? (
						<svg
							className='h-8 w-8 text-white'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							aria-hidden='true'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					) : (
						<svg
							className='h-8 w-8 text-white'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							aria-hidden='true'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					)}
      			</button>
				<div className='text-white font-poppins hidden lg:block'>
					<Link href='/'>
						<a className='hover:bg-gray-700 py-1 px-3 rounded h-min w-fit mx-auto'>
							Início
						</a>
					</Link>
					<Link href='/personagens'>
						<a className='hover:bg-gray-700 py-1 px-3 rounded h-min w-fit mx-auto'>
							Personagens
						</a>
					</Link>
					<Link href='/sobre'>
						<a className='hover:bg-gray-700 py-1 px-3 rounded h-min w-fit mx-auto'>
							Sobre
						</a>
					</Link>
				</div>
			</div>
				<Transition
					show={isShowing}
					enter='transition-opacity duration-75'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='transition-opacity duration-150'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='grid text-white font-poppins gap-3 text-center mt-5 text-lg'>
						<Link href='/'>
							<a className='hover:bg-gray-700 py-1 px-3 rounded h-min w-fit mx-auto'>
								Início
							</a>
						</Link>
						<Link href='/personagens'>
							<a className='hover:bg-gray-700 py-1 px-3 rounded h-min w-fit mx-auto'>
								Personagens
							</a>
						</Link>
						<Link href='/sobre'>
							<a className='hover:bg-gray-700 py-1 px-3 rounded h-min w-fit mx-auto'>
								Sobre
							</a>
						</Link>
					</div>
				</Transition>
		</nav>
  	);
}
