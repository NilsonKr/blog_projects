from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env")

    APP_NAME: str = "Awesome API"
    DATABASE_URL: str
    DEBUG: bool

settings = Settings()