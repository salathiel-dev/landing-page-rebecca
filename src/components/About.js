import React from "react";

function About() {
    return (
        <section id="about" className="py-20 bg-pink-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <img
                    src="../assets/perfil.jpeg"
                    alt="Foto de perfil"
                    className="rounded-full w-48 h-48 mb-8 md:mb-0 md:mr-8"
                />
                <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
                <p className="text-lg">
                    Sou uma profissional com sólida experiência na área de vendas, atendimento ao cliente e prospecção.
                     Possuo habilidades em negociação, processamento de pagamentos,
                    com foco em eficiência operacional e excelência no atendimento ao cliente.
                </p>
            </div>
        </section>
    );
}

export default About;