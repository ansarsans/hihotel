# Hi Hotel Frontend

Современный многостраничный frontend сайта `Hi Hotel` на:

- Next.js (App Router)
- TypeScript
- Tailwind CSS

Проект сделан как `frontend-only` (без backend/API/DB).

## Локальный запуск

```bash
npm install
npm run dev
```

Открыть: `http://localhost:3000`

## Почему не работал GitHub Pages (Deploy from a branch)

`Deploy from a branch` не собирает Next.js-приложение как Node-проект.  
Этот режим публикует только уже готовые статические файлы из ветки/папки.

Если в ветке лежит исходный код (`src`, `app`, `package.json`), а не экспортированный HTML/CSS/JS, сайт не запустится.

## Публикация через Deploy from a branch (правильный поток)

1. Сгенерировать статическую версию:

```bash
npm run build:pages
```

2. Коммитнуть папку `docs/` в репозиторий.
3. GitHub → `Settings` → `Pages`.
4. `Source`: `Deploy from a branch`.
5. `Branch`: `main` (или нужная ветка), `Folder`: `/docs`.
6. Сохранить.

Скрипт `build:pages` автоматически:

- включает static export для GitHub Pages,
- определяет имя репозитория для `basePath`,
- собирает сайт,
- копирует результат в `docs/`,
- добавляет `docs/.nojekyll`.

## Полезные команды

```bash
npm run lint
npm run build
npm run build:pages
```
