const config = {
    app: {
        name: process.env.APP_NAME || 'Hvt-blog api',
        env: process.env.NODE_ENV || 'development',
        port: process.env.PORT || 3000
    },
    db: {
        host: process.env.DB_HOST || 'cluster0-z5wuk.mongodb.net',
        port: process.env.DB_PORT || 27017,
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'root',
        database: process.env.DB_NAME || 'hvt-blog'
    }
}

module.exports = config;
