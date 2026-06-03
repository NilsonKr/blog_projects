## API Project structure

├── app/
│ ├── **init**.py
│ ├── main.py
│ ├── deps.py
│ ├── core/
│ │ ├── **init**.py
│ │ ├── config.py
│ │ └── database.py
│ ├── models/
│ │ ├── **init**.py
│ │ ├── lobby.py
│ │ └── subjects.py
│ ├── schemas/
│ │ ├── **init**.py
│ │ └── subject.py
│ ├── routes/
│ │ ├── **init**.py
│ │ ├── scripts.py
│ │ └── subjects.py
│ └── websockets/
│ ├── **init**.py
│ └── lobby.py
├── .env
├── alembic.ini
├── Dockerfile
├── Makefile
├── pyproject.toml
├── requirements.txt
└── README.md
