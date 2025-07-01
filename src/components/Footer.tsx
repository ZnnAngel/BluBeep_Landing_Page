
import { Heart, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/604e5fb2-dae7-45aa-bff2-07e9c343c777.png" 
                alt="BluBeep" 
                className="h-10"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Conectando pessoas com microempresas locais através de uma experiência única 
              de descoberta e apoio à comunidade.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>para fortalecer comunidades locais</span>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:adm.blubeep@hotmail.com" 
                  className="hover:text-white transition-colors text-sm"
                >
                  adm.blubeep@hotmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <a 
                  href="tel:+5531999828970" 
                  className="hover:text-white transition-colors text-sm"
                >
                  +55 31 99982-8970
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 BluBeep. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>Apoie o comércio local</span>
              <MapPin className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
