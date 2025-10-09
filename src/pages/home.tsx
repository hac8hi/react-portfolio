import { SparklesCore } from "../components/home/Sparkles"
import TrueFocus from "../components/home/TrueFocus"
import BlurText from "../components/BlurText"
import SkillTag from "../components/home/SkillTag"
import TiltedCard from "../components/home/TitledCard"
import Experiences from "./experiences"


const devWebSkills = [
    'Django REST', 'FastAPI', 'Express JS', 'Node JS', 'Tailwind', 'React', 'Javascript',
    'Supabase', 'MySQL', 'MongoDB'
]

const dataProcessing = [
    'Python', 'PyQt', 'NumPy', 'SciPy', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'SQL'
]

const sysNetworkAutomation = [
    'Linux(Debian)', 'Shell/Bash Script', 'Outils Réseaux', 'Microcontrôleurs'
]

export default function Home() {
    return (
        <main className="flex-grow flex flex-col items-center h-full relative">
            <div className="h-[40rem] w-full flex flex-col items-center justify-center">
                <div className="relative z-20">
                    <BlurText
                        text="Rado Andrianirina"
                        delay={150}
                        animateBy="letters"
                        direction="top"
                        className="lg:text-9xl md:text-7xl text-4xl font-bold text-center text-white" />
                </div>
                <div className="w-full h-40 relative">

                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                    <div className="absolute inset-0">
                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={500}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />
                        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>
                    <div className="absolute inset-0 pt-10 items-center justify-center">
                        <TrueFocus
                            sentence="Développement   Data   Automatisation"
                            manualMode={true}
                            blurAmount={5}
                            borderColor="cyan"
                            animationDuration={0.3}
                            pauseBetweenAnimations={1}
                        />

                    </div>
                </div>
            </div>
            <div className="flex-grow flex flex-col md:flex-row items-center justify-center w-full md:w-9xl md:space-x-50 space-x-0">
                <div className="flex flex-col items-center justify-center w-full max-w-lg px-4 md:px-0 mt-10 mb-20 space-y-8">
                    <div className="flex flex-col items-center justify-center">
                        <div className="hidden md:block">
                            <TiltedCard
                                imageSrc="/home/rado.png"
                                altText="Rado Andrianirina"
                                captionText="Rado Andrianirina"
                                containerHeight="400px"
                                containerWidth="300px"
                                imageHeight="400px"
                                imageWidth="300px"
                                rotateAmplitude={10}
                                scaleOnHover={1.1}
                                showMobileWarning={false}
                                showTooltip={false}
                                displayOverlayContent={true}
                            />
                        </div>
                        <div className="block md:hidden">
                            <TiltedCard
                                imageSrc="/home/rado.png"
                                altText="Rado Andrianirina"
                                captionText="Rado Andrianirina"
                                containerHeight="300px"
                                containerWidth="300px"
                                imageHeight="300px"
                                imageWidth="300px"
                                rotateAmplitude={10}
                                scaleOnHover={1.1}
                                showMobileWarning={false}
                                showTooltip={false}
                                displayOverlayContent={true}
                            />
                        </div>
                        <h3 className="text-white font-bold md:text-2xl text-lg text-center justify-center mt-8 mb-3">
                            Hello World ! I'm Rado
                        </h3>
                        <p className="text-gray-400 md:text-lg text-md mt-2 leading-relaxed text-center justify-center">
                            Ingénieur en Informatique Appliquée, je recherche des opportunités en développement web ou Python, avec des connaissance solides en Linux, réseau et electronique que j'applique dans mes projets pour automatiser et optimiser les solutions.
                        </p>
                        <div className="">

                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full max-w-lg px-4 md:px-0 mt-10 mb-20 space-y-8">
                    <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                        <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">
                            Développement Web
                        </h3>
                        <p className="text-gray-400 md:text-lg text-md mt-2 leading-relaxed mb-5">
                            Je développe des applications web complètes, optimisées pour la performance et la scalabilité. Spécialisé dans le stack MERN, j'élargis également mes compétences vers le mobile en apprenant Flutter.
                        </p>
                        <h4 className="text-cyan-300 font-semibold mb-3 text-base">
                            Stack &amp; outils
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {devWebSkills.map(skill => (
                                <SkillTag key={skill} skillName={skill} />
                            ))}
                        </div>
                    </div>
                    <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                        <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">
                            Analyse des données
                        </h3>
                        <p className="text-gray-400 md:text-lg text-md mt-2 leading-relaxed mb-5">
                            Je maîtrise l'ensemble du cycle de traitement des données, avec une expertise technique centrée sur Python et SQL. Capable de transformer des données brutes en insights exploitables pour guider la prise de décision.
                        </p>
                        <h4 className="text-cyan-300 font-semibold mb-3 text-base">
                            Stack &amp; outils
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {dataProcessing.map(skill => (
                                <SkillTag key={skill} skillName={skill} />
                            ))}
                        </div>
                    </div>
                    <div className="relative p-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
                        <h3 className="text-white font-bold md:text-2xl text-lg tracking-wide mb-3">
                            Systèmes, Réseaux &amp; Automatisation
                        </h3>
                        <p className="text-gray-400 md:text-lg text-md mt-2 leading-relaxed mb-5">
                            Passionné par l'automatisation des systèmes et des réseaux, j'utilise des scripts Shell/Bash pour optimiser les processus. J'ai également une expérience pratique avec les microcontrôleurs pour des projets embarqués.
                        </p>
                        <h4 className="text-cyan-300 font-semibold mb-3 text-base">
                            Stack &amp; outils
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {sysNetworkAutomation.map(skill => (
                                <SkillTag key={skill} skillName={skill} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5">
                <BlurText
                    text="Expériences"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="md:text-5xl text-3xl font-extrabold text-white"
                />
            </div>
            <Experiences />
        </main>
    )
}
