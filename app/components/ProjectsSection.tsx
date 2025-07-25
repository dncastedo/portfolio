'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
//   {
//     id: 1,
//     title: 'E-Commerce Olist',
//     description: 'Análise de dados via Big Query e geração de insights via Looker',
//     technologies: ['Looker', 'SQL'],
//     details: `Desafio: Compreender padrões e causas de acidentes em rodovias federais brasileiras 
// 	entre 2007 e 2022, visando subsidiar estratégias de prevenção.

// Solução:
// • Análise de 1,9 milhão de registros
// • Limpeza e padronização de dados temporais, categóricos e geográficos
// • Criação de visualizações para identificar correlações entre variáveis como estado, clima, ]
// tipo de pista, horário e gravidade

// Resultado:
// • Minas Gerais lidera em acidentes e mortes, com destaque para a BR-381
// • Falta de atenção é a principal causa (615 mil ocorrências)
// • Sextas-feiras e horários de pico concentram maior volume de acidentes
// • Identificação de municípios críticos como Curitiba e Guarulhos`,
//     image: '/code.jpg',
//     link: 'https://link-do-projeto-1.com',
//   },
  {
    id: 2,
    title: 'Superstore Dataset',
    description: 'Análise de dados de e-commerce usando python, pandas e matplotlib',
    technologies: ['Python'],
    details: `Objetivo
Identificar padrões de vendas, lucro e comportamento do cliente usando EDA e estatística com Python para orientar decisões estratégicas da Superstore.

Desafios

• Produtos como Tables e Bookcases geram prejuízo.
• Descontos elevados reduzem o lucro.
• Diferenças de desempenho entre regiões e segmentos.
• Sazonalidade nas vendas.
• Custos altos com modos de envio rápidos.

Conclusões

• Focar em produtos de Technology e rever estratégias para Furniture.
• Priorizar ações para o segmento Consumer e nas regiões West e East.
• Planejar estoques e promoções para o fim do ano.
• Usar descontos com cautela, evitando prejuízo.
• Garantir eficiência no envio padrão e revisar custos dos modos rápidos.`,
    image: '/superstore-graph.jpg',
    link: 'https://medium.com/@dncastedo/uma-análise-de-dados-do-superstore-dataset-414fe7be48df',
  },
  {
    id: 3,
    title: 'Catálogo de Livros',
    description: 'Análise de dados de um catálogo de dados feito inteiramente em Power BI',
    technologies: ['Power BI'],
    details: `Objetivo
Desenvolver habilidades práticas de análise de um catálogo de dados e criar um dashboard interativo com Power BI que apoie curadoria, marketing e parcerias editoriais.
Desafios
•	Limpar e padronizar dados inconsistentes.
•	Criar métricas em DAX que traduzam o engajamento dos leitores de forma comparável.
•	Entender a relação entre características dos livros (como número de páginas) e o engajamento.
Conclusões
•	Livros curtos tendem a engajar rapidamente; longos geram resenhas mais profundas.
•	Gêneros como Não Ficção e Clássicos têm alta avaliação mesmo com poucos títulos.
•	Editoras independentes também podem gerar alto engajamento, abrindo espaço para diversificação.
•	Dashboards bem construídos ajudam a contar histórias úteis para decisões reais, mesmo em projetos fictícios.
`,
    image: '/capa-medium-dash-pb-livros.png',
    link: 'https://medium.com/@dncastedo/construindo-um-dashboard-de-engajamento-de-livros-com-power-bi-1fc3090b67f5',
  },
  // {
  //   id: 4,
  //   title: 'Relatório Excel',
  //   description: 'Ferramenta de gerenciamento de tarefas colaborativas com atualizações em tempo real',
  //   technologies: ['Python'],
  //   details: 'Texto detalhado do projeto 4.',
  //   image: '/code.jpg',
  //   link: 'https://link-do-projeto-4.com',
  // },
  // {
  //   id: 5,
  //   title: 'Análise de Dados com Spark (?)',
  //   description: 'Ferramenta de gerenciamento de tarefas colaborativas com atualizações em tempo real',
  //   technologies: ['Python'],
  //   details: 'Texto detalhado do projeto 6.',
  //   image: '/code.jpg',
  //   link: 'https://link-do-projeto-6.com',
  // },
  {
    id: 6,
    title: 'Data Lake AWS',
    description: 'Criação de um Data Lake para armazenar dados do TMB e visualização via Quicksight',
    technologies: ['Python', 'Amazon S3', 'AWS Lambda', 'AWS Glue', 'Amazon Athena', 'Quicksight', 'Docker'],
    details: `Objetivo
Criei um Data Lake na AWS para armazenar e analisar dados de filmes de terror da API TMDB, usando camadas (Raw, Trusted, Refined) no Amazon S3. 
Usei AWS Glue, Athena para transformar, modelar (star schema) e QuickSight para visualizar os dados, gerando insights sobre subgêneros e tendências.

Desafios

• Padronizar dados de diferentes fontes.
• Automatizar ingestão com Docker e Lambda e transformar com AWS Glue e Athena.
• Garantir governança e rastreabilidade nas camadas.
• Otimizar consultas e armazenamento (Parquet).
• Criar dashboards claros e estratégicos.

Conclusões

• Data Lake AWS flexível e escalável para grandes volumes.
• Arquitetura em camadas assegura qualidade e governança.
• Modelagem star schema facilita análise detalhada.
• QuickSight permite visualizações estratégicas eficientes.`,
    
	image: '/datalake.jpg',
    link: 'https://medium.com/@dncastedo/criação-de-um-data-lake-na-aws-6c86d7165e00',
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleNext = () => {
    const currentIndex = projects.findIndex((p) => p.id === selected);
    const next = (currentIndex + 1) % projects.length;
    setSelected(projects[next].id);
  };

  const handlePrev = () => {
    const currentIndex = projects.findIndex((p) => p.id === selected);
    const prev = (currentIndex - 1 + projects.length) % projects.length;
    setSelected(projects[prev].id);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === 'overlay') setSelected(null);
  };

  return (
    <section className="relative py-12 md:py-20 px-4 w-full bg-gradient-to-b from-black to-[#0b0a1c]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-white"
        >
          Projetos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: project.id * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/10 rounded-full text-white text-sm font-semibold"
                      title={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 bg-white/10 rounded-full transition-all font-bold text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600"
                  >
                    Projeto Completo
                  </a>
                  <button
                    onClick={() => setSelected(project.id)}
                    className="text-sm px-4 py-2 bg-white/10 rounded-full transition-all font-bold text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-600"
                    aria-label={`Expandir detalhes do projeto ${project.title}`}
                  >
                    Resumo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          id="overlay"
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
        >
          {/* Setas fixas fora do card */}
          <button
            className="fixed left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-60"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            className="fixed right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-60"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Próximo projeto"
          >
            <ChevronRight size={32} />
          </button>

          {/* Card expandido com imagem de fundo e fundo translúcido */}
          <div
            className="relative max-w-3xl w-full rounded-lg overflow-hidden z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagem de fundo */}
            <Image
              src={projects.find((p) => p.id === selected)?.image || ''}
              alt="Imagem do projeto"
              fill
              className="object-cover absolute inset-0 z-[-1] opacity-30"
            />
            {/* Camada escura translúcida para destacar o texto */}
            <div className="absolute inset-0 bg-black/70 z-[-1]" />

            {/* Conteúdo */}
            <div className="p-8 text-white backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-center mb-4">
                {projects.find((p) => p.id === selected)?.title}
              </h3>
              <div className="text-lg text-justify space-y-2">
                {projects
                  .find((p) => p.id === selected)
                  ?.details.split('\n')
                  .map((line, index) => {
                    if (
                      line.startsWith('Objetivo') ||
                      line.startsWith('Desafios') ||
                      line.startsWith('Conclusões')
                    ) {
                      return (
                        <p key={index} className="text-xl font-bold text-center mt-6">
                          {line}
                        </p>
                      );
                    }
                    return <p key={index}>{line}</p>;
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
