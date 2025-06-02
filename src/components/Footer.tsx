import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900/95 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">LC</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">
                  La-Carta Roleplay
                </h3>
                <p className="text-purple-300 text-sm">GTA 5 RP Server</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Лучший сервер ролевой игры в GTA 5. Реалистичный геймплей, дружное
              сообщество и постоянное развитие проекта.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-discord-blue rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon
                  name="MessageCircle"
                  size={20}
                  className="text-gray-400 hover:text-white"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon
                  name="Globe"
                  size={20}
                  className="text-gray-400 hover:text-white"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon
                  name="Youtube"
                  size={20}
                  className="text-gray-400 hover:text-white"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/rules"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Правила сервера
                </a>
              </li>
              <li>
                <a
                  href="/guide"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Гайд для новичков
                </a>
              </li>
              <li>
                <a
                  href="/jobs"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Профессии
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Server Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Подключение</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">IP адрес сервера:</p>
                <p className="text-white font-mono bg-gray-800 px-3 py-1 rounded text-sm">
                  connect.la-carta.ru
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Онлайн:</p>
                <p className="text-green-400 font-semibold">247/300 игроков</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 La-Carta Roleplay. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
