import React from 'react';

function Footer () {
    return (
      <footer className="bg-gray-800 text-white py-4">
          <p>© 2024 Rebecca Batista Vieira. Todos os direitos reservados.</p>
          <div className="mt-2">
              <a href="https://www.instagram.com/rebeccavieiraa_/" className="mx-2 hover:text-pink-300">Instagram</a>
              <a href="https://wa.me/66996701489?text=Tenho%20interesse%20em%20contratar%20seu%20serviço." className="mx-2 hover:text-pink-300">WhatsApp</a>
          </div>
      </footer>
    );
}

export default Footer;
