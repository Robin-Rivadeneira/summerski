module.exports = {

    database: {
        connectionLimit: 10,
        host: process.env.DATABASE_HOST || 'bgyuh3ishrfbfnmo5ate-mysql.services.clever-cloud.com',
        user: process.env.DATABASE_USER || 'u5vdzwlw6gnz1buo',
        password: process.env.DATABASE_PASSWORD || '1p9VeXSLfoSRNLM3w5MK',
        database: process.env.DATABASE_NAME || 'bgyuh3ishrfbfnmo5ate'
    }

};