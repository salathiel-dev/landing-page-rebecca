import React from "react";

function Hero() {
    return (
        <section id="hero" className="bg-blue-500 text-white py-20">
            <div className={"container mx-auto text-center"}>
                <h2 className={"text-4xl font-bold mb-4"}>Bem-vindo à minha Landing Page</h2>
                <p className={"text-lg mb-6"}>Sou uma promoter de vendas focada em atendimento ao cliente</p>
                <a href="#about" className="bg-white text-blue-500 px-6 py-2 rounded-full">Saiba mais</a>
            </div>
        </section>
    );
}

export default Hero;
