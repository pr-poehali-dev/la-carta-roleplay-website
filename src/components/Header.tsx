import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">LC</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">La-Carta</h1>
              <p className="text-purple-300 text-xs">Roleplay</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Главная
            </a>
            <a
              href="/news"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Новости
            </a>
            <a
              href="/shop"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Магазин
            </a>
            <a
              href="/donate"
              className="text-gray-300 hover:text-purple-400 transition-colors"
            >
              Донат
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Войти
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700">
              Регистрация
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <div className="flex flex-col space-y-3">
              <a
                href="/"
                className="text-gray-300 hover:text-purple-400 px-2 py-1"
              >
                Главная
              </a>
              <a
                href="/news"
                className="text-gray-300 hover:text-purple-400 px-2 py-1"
              >
                Новости
              </a>
              <a
                href="/shop"
                className="text-gray-300 hover:text-purple-400 px-2 py-1"
              >
                Магазин
              </a>
              <a
                href="/donate"
                className="text-gray-300 hover:text-purple-400 px-2 py-1"
              >
                Донат
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="ghost" className="text-gray-300 justify-start">
                  Войти
                </Button>
                <Button className="bg-gradient-to-r from-purple-600 to-orange-600">
                  Регистрация
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
