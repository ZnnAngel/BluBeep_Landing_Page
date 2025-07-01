
import { Download, Smartphone, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DownloadSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
            <Smartphone className="h-10 w-10" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Baixe o BluBeep agora
          </h2>
          
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Comece sua jornada de descoberta e apoie microempresas locais. 
            Disponível em breve para iOS e Android.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          {/* App Store Button */}
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white bg-opacity-10 border-white border-2 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg backdrop-blur-sm"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center">
                <span className="text-lg">🍎</span>
              </div>
              <div className="text-left">
                <div className="text-xs opacity-80">Baixar na</div>
                <div className="font-semibold">App Store</div>
              </div>
            </div>
          </Button>
          
          {/* Google Play Button */}
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white bg-opacity-10 border-white border-2 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg backdrop-blur-sm"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded flex items-center justify-center">
                <span className="text-lg">📱</span>
              </div>
              <div className="text-left">
                <div className="text-xs opacity-80">Disponível no</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </div>
          </Button>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-10 rounded-full px-6 py-3 backdrop-blur-sm">
            <Star className="h-5 w-5 text-yellow-300" />
            <span className="text-sm">Em breve - Cadastre-se para ser notificado</span>
            <Star className="h-5 w-5 text-yellow-300" />
          </div>
        </div>
        
        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Mapa Interativo</h3>
            <p className="text-sm opacity-80">Explore negócios locais de forma visual e intuitiva</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🧲</span>
            </div>
            <h3 className="font-semibold mb-2">Ímãs Digitais</h3>
            <p className="text-sm opacity-80">Salve seus lugares favoritos como uma coleção pessoal</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🏪</span>
            </div>
            <h3 className="font-semibold mb-2">Apoio Local</h3>
            <p className="text-sm opacity-80">Fortaleça sua comunidade apoiando pequenos negócios</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
