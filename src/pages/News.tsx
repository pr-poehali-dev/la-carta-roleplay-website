import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Обновление 2.5: Новая система банд",
      excerpt:
        "Представляем кардинально переработанную систему банд с новыми возможностями и механиками противостояния.",
      date: "2024-01-15",
      category: "Обновление",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Зимний ивент: Снежные гонки",
      excerpt:
        "Участвуйте в захватывающих зимних гонках и получайте уникальные награды!",
      date: "2024-01-10",
      category: "Ивент",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Новые правила сервера",
      excerpt:
        "Обновлены правила сервера для улучшения игрового процесса. Ознакомьтесь с изменениями.",
      date: "2024-01-05",
      category: "Важное",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">
              Новости сервера
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Следите за последними обновлениями, событиями и важными
              объявлениями La-Carta Roleplay
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card
                key={item.id}
                className="bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center text-gray-400 text-sm mb-2">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    {new Date(item.date).toLocaleDateString("ru-RU")}
                  </div>
                  <CardTitle className="text-white text-xl leading-tight">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
