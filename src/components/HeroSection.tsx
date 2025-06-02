
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-900 via-purple-900/20 to-orange-900/20 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23a855f7" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Server Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 text-sm font-medium">Сервер онлайн • 247/300 игроков</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              La-Carta
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-gray-300">Roleplay</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Погрузитесь в мир реалистичного ролевого отыгрыша в GTA 5. 
            Станьте частью уникального сообщества и создайте свою историю в Лос-Сантосе.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white px-8 py-3 text-lg font-semibold shadow-lg shadow-purple-500/25"
            >
              <Icon name="Play" className="mr-2" />
              Начать играть
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-3 text-lg"
            >
              <Icon name="Users" className="mr-2" />
              Discord сервер
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">15,000+</div>
              <div className="text-gray-400 text-sm">Зарегистрированных игроков</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Онлайн без перерывов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">100+</div>
              <div className="text-gray-400 text-sm">Уникальных профессий</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
