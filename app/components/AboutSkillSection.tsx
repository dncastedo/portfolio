'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = ['EDA', 'Data Viz', 'Modelagem de Dados', 'SQL', 'Python', 'Power BI', 'Excel', 'AWS',];

export default function ProfilePage() {
	return (
		<main>

			{/* Seção Sobre Mim */}
			<section className="relative">
				{/* Gradiente de transição no topo */}
				{/* <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0b0a1c] to-transparent z-0" /> */}

				{/* Conteúdo */}
				<div className="relative z-10 py-12 md:py-20 px-4 max-w-7xl mx-auto">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-3xl md:text-4xl font-bold mb-12 text-center"
					>
						Sobre mim
					</motion.h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						{/* Foto redonda */}
						<div className="flex justify-center">
							<div className="w-80 h-80 relative rounded-full overflow-hidden border-4 border-black shadow-lg">
								<Image
									src="/diane.png" // Atualize o caminho da imagem conforme necessário
									alt="Minha foto"
									fill
									className="object-cover"
								/>
							</div>
					</div>

						{/* Texto */}
						<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="text-lg leading-relaxed text-gray-300 text-justify"
					>
							<p>
								Olá! Sou uma profissional orientada por dados, com experiência prática em 
								análise e engenharia de dados, além de uma base sólida em desenvolvimento web. 
								Trabalho com BigQuery, Python, Power BI, SQL e ferramentas de modelagem e organização 
								de dados. Tenho familiaridade com todas as etapas do ciclo de vida dos dados,
								da ingestão à visualização, e estou sempre em busca de soluções organizadas, 
								eficazes e que gerem valor real para o negócio. 
								Acredito no poder dos dados bem tratados para apoiar decisões estratégicas e 
								promover melhorias contínuas.
							</p>
						</motion.div>

					</div>
				</div>
			</section>

			{/* Seção Habilidades */}
			<section className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20">
				<div className="max-w-7xl mx-auto px-4">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
					>
						Habilidades e Tecnologias
					</motion.h2>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{skills.map((skill, index) => (
							<motion.div
								key={skill}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: index * 0.1 }}
								whileHover={{ scale: 1.05 }}
								className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
							>
								<h3 className="text-lg font-semibold">{skill}</h3>
							</motion.div>
						))}
					</div>
				</div>
			</section>

		</main>
	);
}
