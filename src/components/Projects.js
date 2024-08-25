import React from "react";

function Projects() {
    return (
      <section id="projects" className="py-20 bg-pink-50">
          <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Formação</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-4 shadow-lg rounded">
                      <h3 className="text-xl font-semibold mb-2">RECURSOS HUMANOS</h3>
                      <p className="text-gray-700">
                          Cursando o Curso Tecnólogo em Gestão de Recursos Humanos pela Uniasselvi,
                          com foco em recrutamento, seleção e desenvolvimento de talentos.
                          Conhecimento em gestão estratégica de pessoas e cultura organizacional.
                      </p>
                  </div>
                  <div className="bg-white p-4 shadow-lg rounded">
                      <h3 className="text-xl font-semibold mb-2">CERTIFICAÇÃO CPA-10</h3>
                      <p className="text-gray-700">
                          Certificação CPA-10 pela ANBIMA, com foco na distribuição de produtos de investimento.
                          Conhecimento em Sistema Financeiro Nacional, fundos de investimento e instrumentos de renda fixa e variável.
                      </p>
                  </div>
              </div>
          </div>
      </section>
    );
}

export default Projects;
