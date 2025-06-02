import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Shop = () => {
  const categories = [
    {
      name: "Транспорт",
      icon: "Car",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Недвижимость",
      icon: "Building",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Валюта",
      icon: "CreditCard",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "VIP статус",
      icon: "Crown",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const items = [
    {
      name: "1,000,000 игровых долларов",
      price: "299 ₽",
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=300&h=200&fit=crop",
      popular: true,
    },
    {
      name: "VIP статус на месяц",
      price: "599 ₽",
      image:
        "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=300&h=200&fit=crop",
      popular: false,
    },
    {
      name: "Спортивный автомобиль",
      price: "799 ₽",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&h=200&fit=crop",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              Внутренний магазин
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Покупайте игровые предметы, валюту и улучшения для комфортной игры
              на сервере
            </p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group"
              >
                <CardHeader className="text-center py-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      name={category.icon}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-white text-lg">
                    {category.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Featured Items */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Популярные товары
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {items.map((item, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden relative"
                >
                  {item.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-purple-600 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Популярно
                      </span>
                    </div>
                  )}

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />

                  <CardHeader>
                    <CardTitle className="text-white text-lg">
                      {item.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-400">
                        {item.price}
                      </span>
                      <Button className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700">
                        Купить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Notice */}
          <div className="text-center">
            <Card className="bg-yellow-900/20 border-yellow-600/30 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-3">
                  <Icon
                    name="AlertTriangle"
                    size={24}
                    className="text-yellow-400 mr-2"
                  />
                  <span className="text-yellow-400 font-semibold">
                    Внимание
                  </span>
                </div>
                <p className="text-gray-300">
                  🚧 Система платежей находится в разработке. Для покупок
                  обращайтесь к администрации в Discord.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
