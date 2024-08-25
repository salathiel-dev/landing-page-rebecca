import React from 'react';

function Contact() {
    return (
      <section id="contact" className="bg-blue-500 text-white ppy-20">
          <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Contato</h2>
              <form className="max-w-lg mx-auto">
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    className="w-full p-2 mb-4 text-gray-900"
                  />
                  <input
                    type="email"
                    placeholder="Digite seu email"
                    className="w-full p-2 mb-4 text-gray-900"
                  />
                  <textarea
                    placeholder="Sua mensagem"
                    className="w-full p-2 mb-4 text-gray-900"
                  />
                  <button type="submit" className="bg-white text-blue-500 px-4 py-2 rounded-full">
                      Enviar
                  </button>
              </form>
          </div>
      </section>
    );
}

export default Contact;
