import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const GameFeatures = () => {
  const features = [
    {
      icon: "Car",
      title: "Реалистичная экономика",
      description:
        "Работайте, зарабатывайте и покупайте недвижимость в виртуальном мире",
    },
    {
      icon: "Shield",
      title: "Полиция и преступность",
      description:
        "Станьте копом или преступником в увлекательной системе противостояния",
    },
    {
      icon: "Building",
      title: "Бизнес система",
      description: "Создавайте и развивайте собственные предприятия",
    },
    {
      icon: "Users",
      title: "Семьи и банды",
      description: "Объединяйтесь с друзьями для достижения общих целей",
    },
    {
      icon: "Heart",
      title: "Отношения",
      description: "Стройте отношения, создавайте семью в игровом мире",
    },
    {
      icon: "Trophy",
      title: "Уникальные ивенты",
      description: "Участвуйте в захватывающих событиях и соревнованиях",
    },
  ];

  return (
    <section className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Особенности геймплея
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Погрузитесь в самый реалистичный мир ролевой игры в GTA 5 с
            продуманными механиками и бесконечными возможностями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900/70 border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-orange-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name={feature.icon}
                    size={32}
                    className="text-purple-400"
                  />
                </div>
                <CardTitle className="text-white text-xl mb-2">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameFeatures;
