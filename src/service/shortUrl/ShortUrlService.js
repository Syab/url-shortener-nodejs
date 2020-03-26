import { ShortUrlRepository } from '../../repository';
import { logger } from "../../common/utilities/logger";
import { base_url } from "../../../config";
import { HTTP_CODE_200, HTTP_CODE_201, HTTP_CODE_404 } from "../../common/statusHandler/HttpCodes";

const shortId = require('shortid');

const insertNewLongUrl = async (req, res, next) => {
    logger.debug(`[SERVICE][SHORTURL] : Inserting new shortUrl : ${JSON.stringify(req.body)}`);
    const shortUnique = shortId.generate().toString();
    const shortUrl = `${shortUnique}`;
    await ShortUrlRepository.insertNewLongUrl(req.body.longUrl, shortUrl);

    return res.status(HTTP_CODE_201).json({
        status  : HTTP_CODE_201,
        shortUrl: `${base_url}/api/v1/shortUrl/${shortUrl}`,
        message : `${req.body.longUrl} has been successfully added`
    });
};

const getOgUrlRedirect = async (req, res, next) => {
    logger.debug(`[SERVICE][SHORTURL] : Retrieving short url ${req.params.short_url}`);
    const reqParams = req.params.short_url;
    const result = await ShortUrlRepository.getUrlRedirect(reqParams);
    if (result == null){
        return res.sendStatus(HTTP_CODE_404)
    }
    res.redirect(result);
};

export default {
    insertNewLongUrl,
    getOgUrlRedirect
}
