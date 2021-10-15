declare namespace NodeJS {
    export interface ProcessEnv {
        MYSQL_DB_HOST?: string,
        MYSQL_DB_PORT?: string,
        MYSQL_DB_USER?: string,
        MYSQL_DB_PASSWORD?: string,
        MYSQL_DB_NAME?: string,
        PORT?: string,


        DISCORD_CLIENT_ID?: string,
        DISCORD_CLIENT_SECRET?: string,
        DISCORD_CALLBACK_URL?: string,


        REDIS_URL?: string,
    }
}