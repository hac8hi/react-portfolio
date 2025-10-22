
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const experiences = [
    {
        id: 1,
        title: "Stagiaire en Developpement Backend",
        company: "Eray Digital",
        year: "Octobre 2025",
        nom: "Developpeur Python/Django Backend",
        description: "Developpement d'un API RESTful avec Django pour un logiciel comptable. J'ai participé à la conception de la base de données, à l'implementation des endpoints des journaux et plans comptables.",
    },
    {
        id: 2,
        title: "Projet de Master",
        company: "Ecole Supérieure Polytechnique d'Antananarivo",
        year: "2024",
        nom: "PPG Monitoring",
        description: "Création d'une application avec PyQt5 et pyqtgraph pour visualiser en temps réel les paramètres physiologiques. Conception d'une pipeline de traitement du signal Photoplethysmographique qui recoit les données des signaux via un microcontrôleur.",
    },
    {
        id: 3,
        title: "Clean Code Contest",
        company: "AlgoMada",
        year: "2023",
        nom: "Developpeur Backend",
        description: "Développement d'une API avec ExpressJS utilisant une pipeline de recherche de chemin le plus court pour une application de type Google Maps pour les trajets et itinéraires à Antananarivo."
    },
    {
        id: 4,
        title: "Hackathon Inter-Universitaire",
        company: "TechZara",
        year: "2023",
        nom: "Developpeur Python",
        description: "Développement d'une application web avec Django pour la gestion de payement mobile money en utilisant l'API d'Airtel Money"
    },
    {
        id: 5,
        title: "Projet de Licence",
        company: "Ecole Supérieure Polytechnique d'Antananarivo",
        year: "2021",
        nom: "Interface de Gestion de réseaux informatique",
        description: "Conception d'une interface semi-graphique avec Dialog pour automatiser la gestion des pare-feu, proxy et IDS sous Debian avec Shell/Bash script."
    }
]

export default function Experiences() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.01
    });

    const dotTop = useTransform(scaleY, [0, 1], ['0%', '100%']);
    return (
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-5">
            <motion.div
                className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-800 transform -translate-x-1/2"
                style={{ scaleY: scaleY, transformOrigin: 'top' }}
            />

            <motion.div
                className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2"
                style={{ top: dotTop }}
            />


            <div className="relative space-y-24">
                {experiences.map((exp, index) => (
                    <div key={exp.id} className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 bg-black rounded-2xl p-6 shadow-lg md:bg-transparent">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                            <h3 className="md:text-3xl text-2xl font-bold text-gray-100">{exp.title}</h3>

                            <p className="text-lg text-cyan-400 mb-1">{exp.company}</p>
                            <span
                                className="md:text-xl text-md font-regular text-gray-400 mb-2"
                                style={{ letterSpacing: '0.4em' }}
                            >
                                {exp.year}
                            </span>
                        </div>
                        <div className={`text-gray-300 md:text-lg text:md ${index % 2 !== 0 ? 'md:text-right' : 'text-left'} ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                            <h3 className="md:text-2xl text-xl font-bold text-gray-100">{exp.nom}</h3>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}