import React from "react";

function Hero() {
    return (
        <section
            id="hero"
            className="bg-cover bg-center h-screen text-white flex flex-col items-center justify-center"
            style={{ backgroundImage: 'url("/public/assets/capa.jpeg")' }}
        >
            <div className="mb-6">
                <img
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                    src="/public/assets/perfil.jpeg"
                    alt="Foto de Perfil"
                />
            </div>

            <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg animate-fadeIn">
                <h2 className="text-5xl font-bold mb-4">Bem-vindo à minha Landing Page</h2>
                <p className="text-lg mb-6">Sou uma promoter de vendas focada em atendimento ao cliente</p>
                <a href="#about" className="bg-white text-pink-600 px-6 py-2 rounded-full hover:bg-pink-200 transition-all duration-300 transform hover:scale-105">
                    Saiba mais
                </a>
            </div>
        </section>
    );
}

export default Hero;
