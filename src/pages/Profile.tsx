import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header Profile Card */}
        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <div className="flex items-center gap-6">
              <Avatar className="w-24 h-24 ring-4 ring-purple-500/30">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" />
                <AvatarFallback className="bg-purple-600 text-white text-2xl">
                  МИ
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-white">
                    Михаил_Иванов
                  </h1>
                  <Badge
                    variant="secondary"
                    className="bg-purple-600 text-white"
                  >
                    VIP
                  </Badge>
                </div>
                <p className="text-slate-300 mb-3">
                  Опытный игрок • На сервере с 2023 года
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Icon name="Trophy" size={16} className="text-yellow-500" />
                    <span>Уровень 47</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-blue-500" />
                    <span>234 часа игры</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} className="text-green-500" />
                    <span>Лидер фракции</span>
                  </div>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </Button>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="stats" className="space-y-6">
          <TabsList className="bg-slate-800/50 border-slate-700">
            <TabsTrigger
              value="stats"
              className="data-[state=active]:bg-purple-600"
            >
              Статистика
            </TabsTrigger>
            <TabsTrigger
              value="character"
              className="data-[state=active]:bg-purple-600"
            >
              Персонаж
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="data-[state=active]:bg-purple-600"
            >
              Активность
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-purple-600"
            >
              Настройки
            </TabsTrigger>
          </TabsList>

          {/* Statistics Tab */}
          <TabsContent value="stats" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon
                      name="DollarSign"
                      size={20}
                      className="text-green-500"
                    />
                    Финансы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Наличные</span>
                      <span className="text-green-400 font-medium">
                        $847,329
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">В банке</span>
                      <span className="text-green-400 font-medium">
                        $2,156,890
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Криптовалюта</span>
                      <span className="text-yellow-400 font-medium">
                        ₿ 4.21
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="Car" size={20} className="text-blue-500" />
                    Транспорт
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Автомобили</span>
                      <span className="text-blue-400 font-medium">7</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Мотоциклы</span>
                      <span className="text-blue-400 font-medium">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Лицензии</span>
                      <span className="text-green-400 font-medium">Все</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="Home" size={20} className="text-purple-500" />
                    Недвижимость
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Дома</span>
                      <span className="text-purple-400 font-medium">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Квартиры</span>
                      <span className="text-purple-400 font-medium">1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Бизнесы</span>
                      <span className="text-yellow-400 font-medium">3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Level Progress */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Прогресс уровня</CardTitle>
                <CardDescription>
                  До следующего уровня осталось 2,340 XP
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Уровень 47</span>
                    <span className="text-slate-400">Уровень 48</span>
                  </div>
                  <Progress value={73} className="h-3" />
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">17,660 / 20,000 XP</span>
                    <span className="text-purple-400">73%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Character Tab */}
          <TabsContent value="character" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    Информация о персонаже
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 text-sm">Имя</label>
                      <p className="text-white font-medium">Михаил</p>
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm">Фамилия</label>
                      <p className="text-white font-medium">Иванов</p>
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm">Возраст</label>
                      <p className="text-white font-medium">28 лет</p>
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm">
                        Профессия
                      </label>
                      <p className="text-white font-medium">Бизнесмен</p>
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm">Фракция</label>
                      <p className="text-purple-400 font-medium">
                        Los Santos Mafia
                      </p>
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm">Ранг</label>
                      <p className="text-yellow-400 font-medium">Лидер</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Навыки</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300">Вождение</span>
                        <span className="text-slate-400">8/10</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300">Стрельба</span>
                        <span className="text-slate-400">6/10</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300">Бизнес</span>
                        <span className="text-slate-400">9/10</span>
                      </div>
                      <Progress value={90} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-300">Лидерство</span>
                        <span className="text-slate-400">10/10</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">
                  Последняя активность
                </CardTitle>
                <CardDescription>
                  Ваши действия за последние 7 дней
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "Успешно завершил ограбление банка",
                      time: "2 часа назад",
                      icon: "Target",
                      color: "text-green-500",
                    },
                    {
                      action: "Купил новый автомобиль Lamborghini",
                      time: "6 часов назад",
                      icon: "Car",
                      color: "text-blue-500",
                    },
                    {
                      action: "Повысил участника фракции",
                      time: "1 день назад",
                      icon: "Users",
                      color: "text-purple-500",
                    },
                    {
                      action: "Завершил квест 'Семейные дела'",
                      time: "2 дня назад",
                      icon: "CheckCircle",
                      color: "text-green-500",
                    },
                    {
                      action: "Участвовал в гонках",
                      time: "3 дня назад",
                      icon: "Zap",
                      color: "text-yellow-500",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg bg-slate-700/30"
                    >
                      <Icon
                        name={item.icon as any}
                        size={20}
                        className={item.color}
                      />
                      <div className="flex-1">
                        <p className="text-white">{item.action}</p>
                        <p className="text-slate-400 text-sm">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Настройки аккаунта</CardTitle>
                <CardDescription>
                  Управление вашим профилем и предпочтениями
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Icon name="User" size={16} className="mr-2" />
                    Изменить информацию профиля
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <Icon name="Key" size={16} className="mr-2" />
                    Сменить пароль
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <Icon name="Bell" size={16} className="mr-2" />
                    Настройки уведомлений
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <Icon name="Palette" size={16} className="mr-2" />
                    Настройки интерфейса
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
