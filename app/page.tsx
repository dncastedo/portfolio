'use client';

import HeroSection from './components/HeroSection';
import AboutSkillSection from './components/AboutSkillSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-black text-white">
			<div id="inicio">
				<HeroSection />
			</div>

			<div id="sobre">
				<AboutSkillSection />
			</div>

			<div id="projetos">
				<ProjectsSection />
			</div>

			<div id="contato">
				<ContactSection />
			</div>
		</div>
	);
}
