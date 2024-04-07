import React from 'react';

const Footer = () => {
  return (
    <footer className=" rounded-lg shadow-4 relative bottom-0 w-full"> 
      <div className="w-full max-w-full mx-auto p-4 mt-20 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between mx-40">
          <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="https://cdn.discordapp.com/attachments/1025049974318305341/1223750191639691274/imagebanniere_1-removebg-preview1.png?ex=661afd2d&is=6608882d&hm=36cc7e92673e07d7c853ddb7bf157291d1fac7769de54538f73482243f516870&" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl text-gray-500 font-semibold whitespace-nowrap">APIRP</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Politique de confidentialité</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Mentions légales</a>
            </li>
            <li>
              <a href="/PageMenu/NousConnaitre" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 w-full dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">© {new Date().getFullYear()} Rebiai Celia et Sofiane Kaabeche. Pas de droits réservés.</span>
      </div>
    </footer>
  );
};

export default Footer;