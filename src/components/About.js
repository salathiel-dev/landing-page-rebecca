import React from "react";
import { motion } from "framer-motion";

function About() {
    return (
        <section id="about" className="py-20 bg-pink-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <motion.img
                    src="../assets/perfil.jpeg"
                    alt="Foto de perfil"
                    className="rounded-full w-48 h-48 mb-8 md:mb-0 md:mr-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                />
                <motion.div
                    className="md:w-2/3"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
                    <p className="text-lg">
                        Sou uma profissional com sólida experiência na área de vendas, atendimento ao cliente e prospecção.
                        Possuo habilidades em negociação, processamento de pagamentos,
                        com foco em eficiência operacional e excelência no atendimento ao cliente.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
