'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect } from 'react';

export default function HeroSection() {
	useEffect(() => {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', (e) => {
			e.preventDefault();
			const target = document.querySelector((e.currentTarget as HTMLAnchorElement).getAttribute('href')!);
			target?.scrollIntoView({ behavior: 'smooth' });
		});
	});
}, []);
 

	return (
		<>
			{/* NAVBAR */}
			<nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex gap-6 text-white font-medium">
  				<a href="#inicio" className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 transition-colors">Início</a>
  				<a href="#sobre" className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 transition-colors">Sobre Mim</a>
  				<a href="#projetos" className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 transition-colors">Projetos</a>
  				<a href="#contato" className="text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600 transition-colors">Contato</a>
			</nav>


			{/* HERO SECTION */}
			<motion.section
				id="inicio"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="h-screen flex items-center justify-center relative overflow-hidden"
			>
				{/* Imagem de fundo */}
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage: "url('/capa.jpg')",
					}}
				/>

				{/* Gradientes sobre a imagem */}
				<div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.5),rgba(0,0,0,0.7))]" />

				{/* Conteúdo */}
				<div className="relative z-10 text-center">
					<motion.h1
						initial={{ y: 50 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
					>
						Diane do Nascimento Castedo
					</motion.h1>
					<motion.p
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-xl md:text-2xl text-gray-300 mb-8 px-4 h-[48px]"
					>
						<span className="text-white">
							<Typewriter
								words={['Analista de Dados',]}
								loop={0}
								cursor
								cursorStyle="|"
								typeSpeed={80}
								deleteSpeed={50}
								delaySpeed={1500}
							/>
						</span>
					</motion.p>
				</div>

				{/* Ícone da seta para próxima seção */}
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
				>
					<a href="#sobre">
						<div className="animate-bounce">
							<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
							</svg>
						</div>
					</a>
				</motion.div>
			</motion.section>
		</>
	);
}
