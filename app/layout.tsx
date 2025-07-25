import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Diane | Analista de Dados',
description:
  'Bem-vindo(a) ao meu portfólio! Sou Analista de Dados com experiência em SQL, Python, Power BI, modelagem e visualização de dados. Transformo dados em decisões por meio de análises claras, eficientes e orientadas por resultados.',
icons: {
  icon: '/letter-d.png'
},
keywords: [
  'Analista de Dados',
  'Portfólio de Dados',
  'SQL',
  'Python',
  'Power BI',
  'ETL',
  'Modelagem de Dados',
  'Análise de Dados',
  'Visualização de Dados',
  'BigQuery',
  'Looker Studio',
  'Excel',
  'Google Sheets',
  'Dashboards',
  'Ciência de Dados',
  'Engenharia de Dados',
  'Dados para Negócios',
  'Diane do Nascimento Castedo',
],
authors: [{ name: 'Diane do Nascimento Castedo' }],
creator: 'Diane do Nascimento Castedo',
openGraph: {
  title: 'Diane do Nascimento Castedo - Analista de Dados | Portfólio',
  description: 'Portfólio profissional de Diane do Nascimento Castedo, Analista de Dados com foco em análises orientadas por dados, visualizações impactantes e soluções eficientes para tomada de decisão.',
url: 'https://your-domain.com',
		siteName: 'Diane do Nascimento Castedo - Portfolio',
		images: [
			{
				url: '/letter-d.png',
				width: 1200,
				height: 630,
				alt: 'Diane do Nascimento Castedo - Portfolio',
			},
		],
		locale: 'pt-BR',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Diane do Nascimento Castedo - Analista de Dados',
		description: 'Portfólio profissional de Diane do Nascimento Castedo, Analista de Dados com foco em análises orientadas por dados, visualizações impactantes e soluções eficientes para tomada de decisão.',
		creator: '@dncastedo',
		images: ['/letter-d.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
