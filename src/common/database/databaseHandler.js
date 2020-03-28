import mysql from 'mysql';
import util from 'util';
import { logger } from "../utilities/logger";
import { db_host, db_pw, db_port, db_user, db_name
} from "../../../config";

const pool = mysql.createPool({
    host : db_host,
    user : db_user,
    password : db_pw,
    database : db_name,
    port : db_port
});

pool.getConnection((err, connection) =>{
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            logger.error('Database Connection Lost');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            logger.error('Database has too many connections')
        }
        if (err.code === 'ECONNREFUSED'){
            logger.error('Database connection refused');
        }
    }
    if (connection) connection.release();
});

pool.query = util.promisify(pool.query);

export {
    pool
}