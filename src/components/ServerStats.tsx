import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServerStats = () => {
  const stats = [
    {
      icon: "Users",
      value: "15,247",
      label: "Игроков зарегистрировано",
      color: "text-blue-400",
    },
    {
      icon: "Clock",
      value: "24/7",
      label: "Время работы сервера",
      color: "text-green-400",
    },
    {
      icon: "Briefcase",
      value: "150+",
      label: "Доступных профессий",
      color: "text-purple-400",
    },
    {
      icon: "Calendar",
      value: "3",
      label: "Года стабильной работы",
      color: "text-orange-400",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900/10 to-orange-900/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Статистика сервера
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-700/50 backdrop-blur-sm text-center hover:border-purple-500/50 transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gray-800/50 flex items-center justify-center">
                  <Icon name={stat.icon} size={24} className={stat.color} />
                </div>
                <CardTitle className={`text-3xl font-bold ${stat.color}`}>
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerStats;
