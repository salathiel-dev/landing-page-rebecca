import React from 'react';

function Header() {
    return (
        <header className="bg-white shadow p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Rebecca Batista Vieira</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#about" className="hover:underline">Sobre</a></li>
                        <li><a href="#experience" className="hover:underline">Experiência</a></li>
                        <li><a href="#projects" className="hover:underline">Projetos</a></li>
                        <li><a href="#contact" className="hover:underline">Contatos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;