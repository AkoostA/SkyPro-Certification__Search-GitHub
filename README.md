# skypro\_\_search-github

---

## Описание

Создано для финальной адаптации **skypro**.
Search-GitHub - это приложение для поиска пользователей на GitHub по логину
Приложение развернуто с помощью create-react-app

### Возможности приложения

- Поиск пользователей по логину
- Просмотр подробной информации о пользователе
- Сортировка по количеству репозиториев
- Пагинация страниц

---

## Стек технологий

- React
- React-Redux
- React-Router
- TypeScript
- Styled-Components

---

## Ссылка на проект

[Deployment выполнен на платформе GitHub Pages](https://akoosta.github.io/skypro__search-github/)

---

## Структура кода

#### Api

- Данные по пользователям берем с: https://api.github.com/search/users?q={имя пользователя}
- [Документация к Api](https://docs.github.com/ru/rest/search/search?apiVersion=2022-11-28#search-users)

#### Назначение папок

- /search-github (корневая папка) - настройка проекта
- /public - хранение html, ico, fonts
- /src - основная папка для сборки проекта
- /api - функции для обращения к api
- /components - компоненты для всего приложения
- /hook - хуки
- /interface - интерфейсы для ts
- /pages - страницы приложения
- /store - управление состояниями приложения

---

## Запуск проекта локально

#### Для клонирования репозитория выполните команду:

```
git clone https://github.com/AkoostA/skypro__search-github
```

#### Для установки зависимостей выполните команду:

```
npm i
```

#### Запуск локального сервера

```
npm run start
```

---
