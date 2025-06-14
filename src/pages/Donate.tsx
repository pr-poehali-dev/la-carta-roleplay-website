import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const donationTiers = [
  {
    name: "Поддержка",
    price: "100₽",
    benefits: ["Благодарность в Discord", "Особый статус"],
    color: "bg-blue-500",
  },
  {
    name: "Спонсор",
    price: "500₽",
    benefits: ["Все предыдущие", "Приоритет в очереди", "Эксклюзивный канал"],
    color: "bg-purple-500",
  },
  {
    name: "Меценат",
    price: "1000₽",
    benefits: [
      "Все предыдущие",
      "Персональная благодарность",
      "Влияние на развитие",
    ],
    color: "bg-gold-500",
  },
];

export default function Donate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6"
          >
            <Icon name="ArrowLeft" size={20} />
            Вернуться на главную
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Поддержи <span className="text-purple-400">La-Carta</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Твоя поддержка помогает нам развивать сервер и создавать лучший
            игровой опыт для всех игроков
          </p>
        </div>

        {/* Donation Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {donationTiers.map((tier, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-colors"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg ${tier.color} flex items-center justify-center mb-3`}
                >
                  <Icon name="Heart" size={24} className="text-white" />
                </div>
                <CardTitle className="text-white text-2xl">
                  {tier.name}
                </CardTitle>
                <CardDescription className="text-3xl font-bold text-purple-400">
                  {tier.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {tier.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <Icon name="Check" size={16} className="text-green-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Поддержать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Support */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center gap-2">
              <Icon name="Info" size={24} className="text-purple-400" />
              Зачем нужна поддержка?
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon
                  name="Server"
                  size={20}
                  className="text-purple-400 mt-1"
                />
                <div>
                  <h3 className="text-white font-semibold">
                    Серверное оборудование
                  </h3>
                  <p className="text-gray-400">
                    Аренда мощных серверов для стабильной игры
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon
                  name="Wrench"
                  size={20}
                  className="text-purple-400 mt-1"
                />
                <div>
                  <h3 className="text-white font-semibold">Разработка</h3>
                  <p className="text-gray-400">
                    Создание новых функций и улучшений
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="Users" size={20} className="text-purple-400 mt-1" />
                <div>
                  <h3 className="text-white font-semibold">
                    Поддержка игроков
                  </h3>
                  <p className="text-gray-400">
                    Команда модераторов и администраторов
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icon
                  name="Gamepad2"
                  size={20}
                  className="text-purple-400 mt-1"
                />
                <div>
                  <h3 className="text-white font-semibold">Игровой контент</h3>
                  <p className="text-gray-400">
                    Регулярные обновления и события
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transparency */}
        <div className="text-center">
          <Badge
            variant="outline"
            className="border-purple-500 text-purple-400 mb-4"
          >
            Прозрачность
          </Badge>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Мы публикуем отчёты о расходах средств в нашем Discord-сервере.
            Каждый рубль идёт на улучшение игрового опыта для всего сообщества.
          </p>
        </div>
      </div>
    </div>
  );
}
