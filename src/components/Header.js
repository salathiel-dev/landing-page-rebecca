import React from 'react';
import { Link } from 'react-scroll';

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full bg-pink-600 shadow p-4 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-white">
                    <Link to="hero" smooth={true} duration={500}>
                        Rebecca Batista Vieira
                    </Link>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="hero" smooth={true} duration={500} className="text-white hover:underlin">
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} className="text-white hover:underline">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link to="experience" smooth={true} duration={500} className="text-white hover:underline">
                                Experiência
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500} className="text-white hover:underline">
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500} className="text-white hover:underline">
                                Contatos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
