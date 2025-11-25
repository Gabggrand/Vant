import React, { useState } from 'react';
import { FaCamera, FaBatteryFull, FaMicrochip, FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f1115] text-[#E0E0E0] font-sans">
      <nav className="p-4 bg-[#191919] shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 sm:w-16 sm:h-14 from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center">
               <img src='./src/img/Logo.png'/>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white">VANT</span>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Artigos</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Modelos</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Conectividade</a>
            <button className="ml-4 bg-gray-700 hover:bg-gray-600 text-white text-sm py-2 px-4 rounded-full transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Login
            </button>
          </div>
          <button 
            className="lg:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
            <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">Artigos</a>
            <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">Modelos</a>
            <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">Conectividade</a>
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white text-sm py-2 px-4 rounded-full transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Login
            </button>
          </div>
        )}
      </nav>
      <section className="relative container mx-auto p-4 sm:p-6 lg:p-8 pt-8 sm:pt-12 lg:pt-16 flex flex-col lg:flex-row items-center justify-between min-h-[70vh] sm:min-h-[60vh] overflow-hidden">
        <div className="z-10 w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2 sm:mb-4">
            VANT PRIME
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4 sm:px-0">
            Experimente o novo ápice da tecnologia móvel.
          </p>
          <button className="bg-[#6B46C1] hover:bg-[#805AD5] text-white font-semibold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all transform hover:scale-105">
            SABER MAIS
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end p-4 sm:p-6 lg:p-8">
           <img src='./src/img/Vant-Prime.png'/>
        </div>
      </section>
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#4B0082] to-transparent my-8 sm:my-12"></div>
      <section className="container mx-auto p-4 sm:p-6 lg:p-8 py-8 sm:py-12 lg:py-16" id="highlights">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-10 text-center lg:text-left">
          DESTAQUES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="bg-[#2A2A2A] p-5 sm:p-6 rounded-xl shadow-lg flex flex-col items-start hover:transform hover:scale-105 transition-all">
            <FaCamera className="text-[#8A2BE2] text-3xl sm:text-4xl mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              SISTEMA DE CÂMERA DE NÍVEL PROFISSIONAL
            </h3>
            <p className="text-gray-400 text-sm">
              Líder mundial em tecnologia de câmeras. Capture momentos como nunca antes.
            </p>
          </div>
          <div className="bg-[#2A2A2A] p-5 sm:p-6 rounded-xl shadow-lg flex flex-col items-start hover:transform hover:scale-105 transition-all">
            <FaBatteryFull className="text-[#8A2BE2] text-3xl sm:text-4xl mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              PODER PARA TODO O DIA
            </h3>
            <p className="text-gray-400 text-sm">
              Bateria super eficiente, chega de preocupações com bateria fraca.
            </p>
          </div>
          <div className="bg-[#2A2A2A] p-5 sm:p-6 rounded-xl shadow-lg flex flex-col items-start hover:transform hover:scale-105 transition-all md:col-span-2 lg:col-span-1">
            <FaMicrochip className="text-[#8A2BE2] text-3xl sm:text-4xl mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
              DESEMPENHO INCRIVELMENTE RÁPIDO
            </h3>
            <p className="text-gray-400 text-sm">
              O processador supera a concorrência no setor.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto p-4 sm:p-6 lg:p-8 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            DESIGN E EXIBIÇÃO
          </h2>
          <div className="w-full max-w-sm sm:max-w-md mb-4 sm:mb-6">
            <div className="relative from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl">
              <img src='./src/img/Vant_Prime.png'/>
            </div>
          </div>
          <ul className="list-disc pl-5 text-gray-400 text-base sm:text-lg space-y-2 text-left">
            <li>Tela AMOLED de ponta a ponta</li>
            <li>Estrutura robusta de alumínio</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-right">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            ESPECIFICAÇÕES
          </h2>
          <div className="w-full max-w-md bg-[#2A2A2A] rounded-xl p-4 sm:p-6 shadow-lg mb-6 sm:mb-8 overflow-x-auto">
            <table className="w-full text-left text-gray-300 text-sm sm:text-base">
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2 pr-2 sm:pr-4 font-semibold">Processador</td>
                  <td className="py-2">Vant Chip Gen 2</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 pr-2 sm:pr-4 font-semibold">RAM</td>
                  <td className="py-2">8GB / 12GB</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 pr-2 sm:pr-4 font-semibold">Armazenar</td>
                  <td className="py-2">256GB / 512GB</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 pr-2 sm:pr-4 font-semibold">Bateria</td>
                  <td className="py-2">6000mAh</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 pr-2 sm:pr-4 font-semibold">Câmera principal</td>
                  <td className="py-2">50MP OIS</td>
                </tr>
                <tr>
                  <td className="py-2 pr-2 sm:pr-4 font-semibold">Resistência</td>
                  <td className="py-2">IP68</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="bg-[#8A2BE2] hover:bg-[#A05DE2] text-white font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all transform hover:scale-105">
            Compre Agora
          </button>
        </div>
      </section>
      <footer className="bg-[#121212] py-6 sm:py-8 text-center text-gray-500 text-xs sm:text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 gap-4">
          <p>&copy; {new Date().getFullYear()} Vant Corporation. Todos os direitos reservados.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;