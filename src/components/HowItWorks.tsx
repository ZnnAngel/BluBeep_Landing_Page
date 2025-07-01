
import { Search, MapPin, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: "Explore sua região",
      description: "Descubra microempresas locais em um raio personalizado ao seu redor",
      color: "bg-blue-100"
    },
    {
      icon: <MapPin className="h-12 w-12 text-green-600" />,
      title: "Salve como ímãs",
      description: "Adicione seus negócios favoritos à sua coleção pessoal de ímãs digitais",
      color: "bg-green-100"
    },
    {
      icon: <Heart className="h-12 w-12 text-purple-600" />,
      title: "Apoie sua comunidade",
      description: "Visite, compre e fortaleça o comércio local da sua vizinhança",
      color: "bg-purple-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Como funciona o <span className="text-blue-600">BluBeep</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Três passos simples para transformar sua forma de descobrir e apoiar negócios locais
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className={`${step.color} rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative connecting line */}
        <div className="hidden md:block relative mt-8">
          <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 transform -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
