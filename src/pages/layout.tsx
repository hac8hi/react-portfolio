import { useState, type ReactNode } from "react";
import GooeyNav from "../components/layout/GooeyNav";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Experiences", href: "/" },
    { label: "Contact", href: "/" },
];

const socialLinks = [
    { platform: "GitHub", href: "https://github.com/hac8hi", iconPath: "/icons/github_icon.svg" },
    { platform: "LeetCode", href: "https://leetcode.com/u/yDposzXuln", iconPath: "/icons/leetcode_icon.png" },
    { platform: "LinkedIn", href: "https://www.linkedin.com/in/rado-herilalaina-andrianirina", iconPath: "/icons/linkedin_icon.svg" },
    { platform: "Gmail", href: "mailto:8rado.andrianirina8@gmail.com", iconPath: "/icons/gmail_icon.svg" },
];

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <body className="antialiased font-gilroy bg-black">
            <header className="sticky top-0 z-50 flex w-full items-center justify-between px-4 py-2 md:px-8 md:py-3 bg-transparent backdrop-blur-[3px]">
                <a href="/">
                    <img
                        src="/logo/Logo R.png"
                        alt="Rado Logo"
                        width={35}
                        height={35}
                        className="m-4 md:m-10 transition-all duration-300 hover:scale-150 hover:rotate-10 hover:brightness-125"
                    />
                </a>
                <div className="hidden md:block font-medium" style={{ height: '70px', width: '400px', position: 'relative' }}>
                    <GooeyNav
                        items={navItems}
                        particleCount={15}
                        particleDistances={[90, 10]}
                        particleR={100}
                        initialActiveIndex={0}
                        animationTime={600}
                        timeVariance={300}
                        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                    />
                </div>

                <button
                    className="md:hidden text-white p-2 focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <div className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ease-in-out"></div>
                    <div className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ease-in-out"></div>
                    <div className="w-6 h-0.5 bg-white transition-all duration-300 ease-in-out"></div>
                </button>
                {mobileMenuOpen && (

                    <div className="md:hidden pt-10 fixed top-[72px] sm:top-[80px] md:top-[96px] right-0 left-0 z-40 p-4 sm:p-5 overflow-y-auto h-[calc(100vh - 72px)] sm:h-[calc(100vh - 80px)] md:h-[calc(100vh - 96px)]">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}

                                    className="text-white hover:text-gray-300 py-2 px-4 font-medium text-base sm:text-lg"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </header>
            {children}
            <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 bg-black/60 border border-white/[.30] border-dashed rounded-full p-2 md:p-4 flex flex-col items-center space-y-7 md:space-y-5">
                {socialLinks.map((link) => (

                    <a
                        key={link.platform}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-200 hover:scale-110"
                    >
                        <img
                            src={link.iconPath}
                            alt={`${link.platform} icon`}

                            width={20}
                            height={20}
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                        />
                    </a>
                ))}
            </div>
        </body>
    )
}