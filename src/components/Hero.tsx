
import { MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-green-400 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/604e5fb2-dae7-45aa-bff2-07e9c343c777.png" 
                alt="BluBeep" 
                className="h-20 mx-auto lg:mx-0 mb-6"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Descubra negócios 
              <span className="text-blue-600"> incríveis</span> 
              <br />perto de você
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Transforme sua vizinhança em uma coleção de descobertas únicas. 
              Salve microempresas locais como ímãs de geladeira e apoie sua comunidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Download className="mr-2 h-5 w-5" />
                Baixar App
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
              {/* Mock map interface */}
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-80 relative overflow-hidden">
                {/* Map grid lines */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                    {Array.from({length: 64}).map((_, i) => (
                      <div key={i} className="border border-gray-300"></div>
                    ))}
                  </div>
                </div>
                
                {/* Location pins as magnets */}
                <div className="absolute top-16 left-20">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg animate-bounce">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="bg-white text-xs px-2 py-1 rounded shadow-md mt-1 text-center">
                    Padaria
                  </div>
                </div>
                
                <div className="absolute top-32 right-16">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg animate-bounce delay-100">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="bg-white text-xs px-2 py-1 rounded shadow-md mt-1 text-center">
                    Café
                  </div>
                </div>
                
                <div className="absolute bottom-20 left-16">
                  <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg animate-bounce delay-200">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="bg-white text-xs px-2 py-1 rounded shadow-md mt-1 text-center">
                    Floricultura
                  </div>
                </div>
                
                <div className="absolute bottom-32 right-20">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg animate-bounce delay-300">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="bg-white text-xs px-2 py-1 rounded shadow-md mt-1 text-center">
                    Livraria
                  </div>
                </div>
                
                {/* Center location indicator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-blue-600 w-4 h-4 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-blue-600 rounded-full opacity-30 animate-ping"></div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Seus negócios favoritos, organizados como ímãs de geladeira
                </p>
              </div>
            </div>
            
            {/* Floating magnet elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 w-12 h-12 rounded-lg shadow-lg transform rotate-12 flex items-center justify-center">
              <span className="text-2xl">🏪</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 w-12 h-12 rounded-lg shadow-lg transform -rotate-12 flex items-center justify-center">
              <span className="text-2xl">☕</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
