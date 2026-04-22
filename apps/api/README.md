# API (Django + Django REST Framework)

## Wymagania

- **Python 3.12+** (lokalnie używany jest wirtualny środowisko `.venv` w tym katalogu).

## Pierwszy raz

```bash
cd apps/api
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

Skopiuj `.env.example` → `.env` i ustaw `DJANGO_SECRET_KEY` (plik `.env` jest wczytywany przez `python-dotenv` przy starcie).

## Migracje i serwer

```bash
source .venv/bin/activate
python manage.py migrate
python manage.py runserver 8000
```

## Endpointy

| Ścieżka        | Opis                    |
| -------------- | ----------------------- |
| `GET /api/health/` | JSON: status usługi |
| `/admin/`      | Panel administracyjny   |

CORS dla dev: dozwolony origin frontu Vite (`http://localhost:5173`).
