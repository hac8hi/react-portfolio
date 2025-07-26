import BlurText from "../components/BlurText";

export default function Project() {
    return (
        <div className="flex w-full items-center justify-center p-4 md:mt-25 mt-5">
            <BlurText
                text="Mes Projets"
                delay={150}
                animateBy="words"
                direction="top"
                className="md:text-7xl text-3xl font-extrabold text-white"
            />
        </div>
    )
}