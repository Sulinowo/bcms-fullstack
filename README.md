# Blood Center Management System (v2)

Nowy stack (**React + API**) — osobne repozytorium względem starego frontu Angular.

## Wymagania

- **Node.js 24+** (Active LTS). W katalogu głównym jest [`.nvmrc`](./.nvmrc) z wpisem `24` — z `nvm`: `nvm install && nvm use`.
- Instalacja bez nvm: [nodejs.org](https://nodejs.org/) (Current / LTS 24.x).
- **Python 3.12+** dla `apps/api` (Django) — szczegóły w [apps/api/README.md](./apps/api/README.md).

## Repozytorium referencyjne (legacy)

Istniejący system (Angular 12, katalog `bcmsfront`):

`/Users/kamilkalwejt/Desktop/BloodCenterManagmentSystemFrontend`

Stamtąd będziemy przenosić domenę i flow ekranów; w tym repo stawiamy **świeży** front i backend.

## Struktura (szkielet)

| Katalog      | Rola                          |
| ------------ | ----------------------------- |
| `apps/web`   | Frontend — **Vite + React 19 + TypeScript** |
| `apps/api`   | Backend — **Django 5 + Django REST Framework** |

## Uruchomienie

### Frontend (`apps/web`)

```bash
cd apps/web
npm install   # pierwszy raz
npm run dev   # http://localhost:5173
```

### API (`apps/api`)

```bash
cd apps/api
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # ustaw DJANGO_SECRET_KEY
python manage.py migrate
python manage.py runserver 8000
```

Health check: `GET http://127.0.0.1:8000/api/health/` — szczegóły w [apps/api/README.md](./apps/api/README.md).
