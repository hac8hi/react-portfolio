import { Img } from "react-image";
import BlurText from "../components/BlurText";
import { GlowCard } from "../components/project/SpotlightCard";
import Squares from "../components/contact/Squares";
import { Link } from "react-router-dom";

const projects = [
    {
        id: 1,
        pic: '/project/ppg.png',
        nom: "PPG Monitoring",
        description: "Création d'une application avec PyQt5 et pyqtgraph pour visualiser en temps réel les paramètres physiologiques. Conception d'une pipeline de traitement du signal Photoplethysmographique qui recoit les données des signaux via un microcontrôleur.",
        link: "github.com/hac8hi/PPGMonitoring"
    },
    {
        id: 2,
        pic: '/project/IGRI.png',
        nom: "Interface de Gestion de réseaux informatique",
        description: "Conception d'une interface semi-graphique avec Dialog pour automatiser la gestion des pare-feu, proxy et IDS sous Debian avec Shell/Bash script.",
        link: "github.com/hac8hi/networkAdmin_with_Dialog"
    },
    {
        id: 3,
        pic: '',
        nom: "Gestionnaire de mot de passe",
        description: "Un gestionnaire de mot de passe concu avec NodeJS et React, les mots de passe sont cryptés avec une clé définit personnalisable puis décrypté quand il veut les consulté.",
        link: "github.com/hac8hi/password-managerg"
    }
]

export default function Project() {
    return (
        <main className="flex flex-col items-center min-h-screen py-5 px-4 sm:px-6 lg:px-8 z-10">
            <div className="items-center my-20 md:my-26">
                <BlurText
                    text="Mes Projets"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="md:text-7xl text-3xl font-extrabold text-white" />
            </div>
            <div className="w-screen flex md:flex-row flex-col items-center justify-center gap-15 custom-cursor z-10">
                {projects.map((pro, _) => (

                    <GlowCard customSize={true} className="lg:w-96 h-[600px] space-x-4 m-4">

                        <div className="p-6 rounded-lg">
                            <Link key={pro.id} to={pro.link} target="_blank" rel="noopener noreferrer">
                                <Img
                                    src={pro.pic}
                                    alt={`${pro.nom} icon`}
                                    className="rounded-lg w-full h-72 object-cover mb-4"
                                />
                            </Link>
                            <h3 className="text-white font-bold md:text-2xl text-lg mb-3 mt-3">
                                {pro.nom}
                            </h3>
                            <p className="text-gray-400 md:text-md text-sm mt-2 mb-5">
                                {pro.description}
                            </p>
                        </div>

                    </GlowCard>
                ))}
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-15">
                <Squares
                    speed={0.5}
                    squareSize={50}
                    direction='diagonal'
                    borderColor='#fff'
                    hoverFillColor='#222' />
            </div>
        </main >
    )
}