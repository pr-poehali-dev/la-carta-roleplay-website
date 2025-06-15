import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [newsForm, setNewsForm] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [serverStats, setServerStats] = useState({
    players: "127",
    maxPlayers: "200",
    uptime: "99.5%",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Простая проверка (в реальном проекте должна быть через API)
    if (
      credentials.username === "admin" &&
      credentials.password === "admin123"
    ) {
      setIsAuthenticated(true);
      toast.success("Вход выполнен успешно");
    } else {
      toast.error("Неверные данные для входа");
    }
  };

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь должно быть API для сохранения новости
    toast.success("Новость добавлена");
    setNewsForm({ title: "", content: "", author: "" });
  };

  const handleStatsUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Статистика обновлена");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-gray-800/50 border-purple-500/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Админ-панель</CardTitle>
            <CardDescription className="text-gray-300">
              Войдите для доступа к управлению сайтом
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-gray-300">
                  Логин
                </Label>
                <Input
                  id="username"
                  type="text"
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                  className="bg-gray-700/50 border-purple-500/20 text-white"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-gray-300">
                  Пароль
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className="bg-gray-700/50 border-purple-500/20 text-white"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-orange-600"
              >
                <Icon name="LogIn" className="mr-2" size={16} />
                Войти
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Админ-панель</h1>
            <p className="text-gray-300">Управление контентом сайта La-Carta</p>
          </div>
          <Button
            onClick={() => setIsAuthenticated(false)}
            variant="outline"
            className="border-purple-500/20"
          >
            <Icon name="LogOut" className="mr-2" size={16} />
            Выйти
          </Button>
        </div>

        <Tabs defaultValue="news" className="space-y-6">
          <TabsList className="bg-gray-800/50 border-purple-500/20">
            <TabsTrigger
              value="news"
              className="data-[state=active]:bg-purple-600"
            >
              <Icon name="Newspaper" className="mr-2" size={16} />
              Новости
            </TabsTrigger>
            <TabsTrigger
              value="stats"
              className="data-[state=active]:bg-purple-600"
            >
              <Icon name="BarChart3" className="mr-2" size={16} />
              Статистика
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-purple-600"
            >
              <Icon name="Settings" className="mr-2" size={16} />
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <Card className="bg-gray-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Добавить новость</CardTitle>
                <CardDescription className="text-gray-300">
                  Создайте новую новость для главной страницы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNewsSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="newsTitle" className="text-gray-300">
                      Заголовок
                    </Label>
                    <Input
                      id="newsTitle"
                      value={newsForm.title}
                      onChange={(e) =>
                        setNewsForm((prev) => ({
                          ...prev,
                          title: e.target.value,
                        }))
                      }
                      className="bg-gray-700/50 border-purple-500/20 text-white"
                      placeholder="Введите заголовок новости"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="newsContent" className="text-gray-300">
                      Содержание
                    </Label>
                    <Textarea
                      id="newsContent"
                      value={newsForm.content}
                      onChange={(e) =>
                        setNewsForm((prev) => ({
                          ...prev,
                          content: e.target.value,
                        }))
                      }
                      className="bg-gray-700/50 border-purple-500/20 text-white min-h-32"
                      placeholder="Введите текст новости"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="newsAuthor" className="text-gray-300">
                      Автор
                    </Label>
                    <Input
                      id="newsAuthor"
                      value={newsForm.author}
                      onChange={(e) =>
                        setNewsForm((prev) => ({
                          ...prev,
                          author: e.target.value,
                        }))
                      }
                      className="bg-gray-700/50 border-purple-500/20 text-white"
                      placeholder="Имя автора"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-orange-600"
                  >
                    <Icon name="Plus" className="mr-2" size={16} />
                    Добавить новость
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <Card className="bg-gray-800/50 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white">Статистика сервера</CardTitle>
                <CardDescription className="text-gray-300">
                  Обновите показатели сервера
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleStatsUpdate} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="players" className="text-gray-300">
                        Игроков онлайн
                      </Label>
                      <Input
                        id="players"
                        value={serverStats.players}
                        onChange={(e) =>
                          setServerStats((prev) => ({
                            ...prev,
                            players: e.target.value,
                          }))
                        }
                        className="bg-gray-700/50 border-purple-500/20 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="maxPlayers" className="text-gray-300">
                        Максимум игроков
                      </Label>
                      <Input
                        id="maxPlayers"
                        value={serverStats.maxPlayers}
                        onChange={(e) =>
                          setServerStats((prev) => ({
                            ...prev,
                            maxPlayers: e.target.value,
                          }))
                        }
                        className="bg-gray-700/50 border-purple-500/20 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="uptime" className="text-gray-300">
                        Аптайм (%)
                      </Label>
                      <Input
                        id="uptime"
                        value={serverStats.uptime}
                        onChange={(e) =>
                          setServerStats((prev) => ({
                            ...prev,
                            uptime: e.target.value,
                          }))
                        }
                        className="bg-gray-700/50 border-purple-500/20 text-white"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-orange-600"
                  >
                    <Icon name="Save" className="mr-2" size={16} />
                    Обновить статистику
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid gap-6">
              <Card className="bg-gray-800/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Общие настройки</CardTitle>
                  <CardDescription className="text-gray-300">
                    Настройки сайта и сервера
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="siteName" className="text-gray-300">
                      Название сайта
                    </Label>
                    <Input
                      id="siteName"
                      defaultValue="La-Carta Roleplay"
                      className="bg-gray-700/50 border-purple-500/20 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="serverIP" className="text-gray-300">
                      IP сервера
                    </Label>
                    <Input
                      id="serverIP"
                      defaultValue="play.la-carta.ru"
                      className="bg-gray-700/50 border-purple-500/20 text-white"
                    />
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-orange-600">
                    <Icon name="Save" className="mr-2" size={16} />
                    Сохранить настройки
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
