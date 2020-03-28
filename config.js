// import 'dotenv/config';

const port = process.env.PORT;
const mongoConnectionString = process.env.mongoCnxString;
const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_host = process.env.DB_HOST;
const db_pw = process.env.DB_PW;
const db_port = process.env.DB_PORT;
const base_url = process.env.BASE_URL;

export {
    port,
    mongoConnectionString,
    db_name,
    db_user,
    db_host,
    db_pw,
    db_port,
    base_url
}