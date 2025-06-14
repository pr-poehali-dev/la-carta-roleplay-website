
# 🚀 Руководство по установке сайта на сервер

## Требования к серверу

- **Node.js** версии 18 или выше
- **npm** или **yarn** для управления пакетами
- **Git** для клонирования репозитория
- Минимум **512 МБ RAM** и **1 ГБ** свободного места

## Способы установки

### 1. Статический хостинг (рекомендуется)

**Для Netlify, Vercel, GitHub Pages:**

```bash
# 1. Клонируйте репозиторий
git clone <ваш-репозиторий-url>
cd <название-проекта>

# 2. Установите зависимости
npm install

# 3. Соберите проект
npm run build

# 4. Папка dist/ содержит готовый сайт
```

**Загрузите содержимое папки `dist/` на ваш хостинг.**

### 2. VPS/Выделенный сервер

#### Шаг 1: Подготовка сервера

```bash
# Обновите систему (Ubuntu/Debian)
sudo apt update && sudo apt upgrade -y

# Установите Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Установите PM2 для управления процессами
sudo npm install -g pm2
```

#### Шаг 2: Загрузка и сборка проекта

```bash
# Клонируйте проект
git clone <ваш-репозиторий-url>
cd <название-проекта>

# Установите зависимости
npm install

# Соберите проект
npm run build
```

#### Шаг 3: Настройка веб-сервера

**Nginx конфигурация:**

```nginx
server {
    listen 80;
    server_name ваш-домен.com;
    
    root /путь/к/проекту/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Кэширование статических файлов
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Apache конфигурация (.htaccess в папке dist/):**

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Кэширование
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

### 3. Docker установка

**Создайте Dockerfile:**

```dockerfile
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Команды для запуска:**

```bash
# Сборка образа
docker build -t ваш-сайт .

# Запуск контейнера
docker run -d -p 80:80 --name ваш-сайт-container ваш-сайт
```

## Автоматическое обновление

### CI/CD с GitHub Actions

Создайте `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Server

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to server
      uses: appleboy/scp-action@v0.1.4
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.KEY }}
        source: "dist/*"
        target: "/var/www/html"
```

## SSL сертификат (HTTPS)

**Для Nginx с Let's Encrypt:**

```bash
# Установите certbot
sudo apt install certbot python3-certbot-nginx

# Получите сертификат
sudo certbot --nginx -d ваш-домен.com

# Автообновление
sudo crontab -e
# Добавьте: 0 12 * * * /usr/bin/certbot renew --quiet
```

## Мониторинг и логи

```bash
# Просмотр логов Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Мониторинг PM2 (если используется)
pm2 status
pm2 logs
pm2 monit
```

## Оптимизация производительности

1. **Gzip сжатие** в Nginx:
```nginx
gzip on;
gzip_vary on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

2. **Кэширование** статических файлов
3. **CDN** для глобальной доставки контента

## Поддержка

При возникновении проблем:
1. Проверьте логи сервера
2. Убедитесь, что все зависимости установлены
3. Проверьте права доступа к файлам
4. Обратитесь в [наше сообщество](https://t.me/+QgiLIa1gFRY4Y2Iy)

---

**Готово!** Ваш сайт должен быть доступен по адресу вашего сервера.
