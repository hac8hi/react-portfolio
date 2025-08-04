import { useNavigate } from "react-router-dom"
import Squares from "../components/contact/Squares"

export default function NotFoundPage() {

    const navigate = useNavigate()
    return (
        <main className="flex flex-col items-center min-h-screen py-5 px-4 sm:px-6 lg:px-8">

            <div className="h-480px z-10">
                <div className="min-h-[500px] flex flex-col justify-center border border-dashed space-y-4">
                    <div className="p-2">
                        <h1 className="text-3xl font-bold text-center text-white">404 - Page Not Found</h1>
                    </div>
                    <button
                        onClick={() => navigate("/")}
                        className="px-4 py-2 bg-cyan-600 text-white font-bold rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black items-center-safe justify-center transition duration-200"
                    >
                        Revenir
                    </button>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-15">
                <Squares
                    speed={0.5}
                    squareSize={50}
                    direction='diagonal'
                    borderColor='#fff'
                    hoverFillColor='#222' />
            </div>
        </main>
    )
}