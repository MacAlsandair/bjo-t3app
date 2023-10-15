import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <h2 className="text-lg font-bold mb-2">Bund Junges Ostpreußen i.d. LO</h2>
            <p className="text-sm">Buchtstraße 4</p>
            <p className="text-sm">D-22087 Hamburg</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <h2 className="text-lg font-bold mb-2">Kontakt</h2>
            <p className="text-sm">Telefon: 040/41 40 08-25</p>
            <p className="text-sm">kontakt@junge-ostpreussen.de</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
