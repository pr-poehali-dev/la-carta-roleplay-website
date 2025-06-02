import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FeatureCards = () => {
  const features = [
    {
      icon: "Newspaper",
      title: "Новости сервера",
      description:
        "Следите за обновлениями, событиями и изменениями на сервере",
      color: "from-blue-500 to-cyan-500",
      buttonText: "Читать новости",
    },
    {
      icon: "CreditCard",
      title: "Донат",
      description: "Поддержите проект и получите уникальные возможности",
      color: "from-green-500 to-emerald-500",
      buttonText: "Донат страница",
    },
    {
      icon: "ShoppingBag",
      title: "Внутренний магазин",
      description: "Покупайте игровые предметы, валюту и улучшения",
      color: "from-purple-500 to-pink-500",
      buttonText: "Открыть магазин",
    },
    {
      icon: "User",
      title: "Личный кабинет",
      description: "Управляйте персонажем, статистикой и настройками аккаунта",
      color: "from-orange-500 to-red-500",
      buttonText: "Войти в кабинет",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Возможности сервера
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Все необходимые инструменты для комфортной игры и взаимодействия с
            сообществом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={feature.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-white text-xl mb-2">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white border-0"
                  variant="outline"
                >
                  {feature.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
