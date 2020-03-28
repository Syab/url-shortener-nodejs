import { pool } from "../../common/database/databaseHandler";
import { INSERT_NEW_URL, GET_URL } from "./Query";
import { logger } from "../../common/utilities/logger";
import { DBError } from "../../common/statusHandler/Error";

const insertNewLongUrl = async (reqBody, shorturl) => {
    logger.info(`[REPO][SHORTURL] : Creating new record for Short URL ${reqBody}, ${shorturl}`);
    try {
        await pool.query(INSERT_NEW_URL, [ reqBody, shorturl ]);
    } catch (err) {
        logger.error(`[REPO][SHORTURL] : Creating new record failed : ${err}`);
        throw new DBError(err);
    }
};

const getUrlRedirect = async ( reqParam ) => {
  logger.info(`[REPO][SHORTURL] : Retrieving Long URL`);
  try{
      const result = await pool.query(GET_URL, [ reqParam ]);
      const myurl = Object.values(result[0]).toString();
      console.log( myurl);
      return myurl;
  } catch (err) {
      logger.error(`[REPO][SHORTURL] : Failed to retrieve Long URL : ${err}`);
      throw new DBError(err);
  }
};

export default {
    insertNewLongUrl,
    getUrlRedirect
}