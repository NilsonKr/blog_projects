## API Project structure

├── alembic/
│ ├── versions/
│ ├── env.py
│ └── script.py.mako
├── app/
│ ├── **init**.py
│ ├── main.py
│ ├── core/
│ │ ├── **init**.py
│ │ ├── config.py
│ │ └── database.py
│ ├── models/
│ │ ├── **init**.py
│ │ └── user.py
│ ├── schemas/
│ │ ├── **init**.py
│ │ └── user.py
│ ├── api/
│ │ ├── **init**.py
│ │ ├── deps.py
│ │ └── routes/
│ │ ├── **init**.py
│ │ └── users.py
│ └── crud/
│ ├── **init**.py
│ └── user.py
├── .env
├── alembic.ini
├── pyproject.toml
└── README.md
