import React from 'react';
import BlurText from "../components/BlurText";
import Squares from "../components/contact/Squares";

const contactInfo = {
    email: "8rado.andrianirina8@gmail.com",
    iconPath: "/icons/gmail_icon.svg"
};



export default function Contact() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = formData.get('name')?.toString() || '';
        const email = formData.get('email')?.toString() || '';
        const subject = formData.get('subject')?.toString() || '';
        const message = formData.get('message')?.toString() || '';

        const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;

        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(emailBody);

        const mailtoLink = `mailto:${contactInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;

        window.location.href = mailtoLink;
    };
    return (
        <main className="flex flex-col items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="items-center mb-12 md:mb-16">
                <BlurText
                    text="Contactez Moi"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="md:text-7xl text-3xl font-extrabold text-white" />
            </div>
            <div className="w-full max-w-md md:max-w-3xl lg:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
                <div className="flex flex-col space-y-6 items-center justify-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Mon Adresse Mail</h2>
                    {contactInfo.email && (
                        <div className="flex items-center text-white/80">
                            <img src={contactInfo.iconPath}
                                alt="email icon"
                                width={15}
                                height={15}
                                className="mr-2" />
                            <a href={`mailto:${contactInfo.email}`} className="hover:underline text-base sm:text-lg">{contactInfo.email}</a>
                        </div>
                    )}
                </div>
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-white">Envoi moi un message</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-1">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-3 py-2 bg-[#1a1b1c] border border-white/[.15] rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-white"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 bg-[#1a1b1c] border border-white/[.15] rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-white"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-1">Motif</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full px-3 py-2 bg-[#1a1b1c] border border-white/[.15] rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-3 py-2 bg-[#1a1b1c] border border-white/[.15] rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-white"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-cyan-600 text-white font-bold rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black transition duration-200"
                        >
                            Envoyer
                        </button>
                    </form>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-[-5] opacity-15">
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