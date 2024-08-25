import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>© 2024 Rebecca Batista Vieira. Todos os direitos reservados.</p>
                <div className="mt-2 flex justify-center space-x-4">
                    <a href="https://www.instagram.com/rebeccavieiraa_/"
                       className="flex items-center hover:text-pink-300">
                        <img src="../assets/instagram.jpg" alt="Instagram" className="w-6 h-6 mr-2"/>
                        Instagram
                    </a>
                    <a href="https://wa.me/5566999171519?text=Tenho%20interesse%20em%20contratar%20seu%20serviço."
                       className="flex items-center hover:text-pink-300">
                        <img src="../assets/whatsapp.png" alt="WhatsApp" className="w-6 h-6 mr-2"/>
                        WhatsApp
                    </a>
                </div>
                <div className="mt-2 flex justify-center space-x-4">
                    <p className="text-sm">
                        Desenvolvido por <a href="https://github.com/salathiel-dev" className="text-pink-500 hover:underline">© Salathiel Vieira</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
