import React from 'react';

function Contact() {
    return (
        <section id="contact" className="bg-pink-600 text-white py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Contato</h2>
                <form className="max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        className="w-full p-2 mb-4 text-gray-900 rounded-lg"
                    />
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        className="w-full p-2 mb-4 text-gray-900 rounded-lg"
                    />
                    <textarea
                        placeholder="Sua mensagem"
                        className="w-full p-2 mb-4 text-gray-900 rounded-lg"
                    />
                    <button type="submit" className="bg-white text-pink-600 px-4 py-2 rounded-full hover:bg-pink-200 transition duration-300">
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
