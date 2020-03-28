import { ShortUrlService } from '../../../../service/index';
import { logger } from "../../../../common/utilities/logger";
import {
    HTTP_CODE_200, HTTP_CODE_201, HTTP_CODE_204
} from "../../../../common/statusHandler/HttpCodes";

const insertNewLongUrlRoute = ( req, res, next ) => {
    logger.debug('Inserting new record');
    return ShortUrlService.insertNewLongUrl( req, res, next)
        .catch( err => next(err))
};

const getAllUrlRoute = ( req, res, next ) => {
    logger.debug('Retrieving all long urls');

};

const getUrlRedirect = ( req, res, next ) => {
    logger.debug('Trying to redirect to correct site');
    return ShortUrlService.getOgUrlRedirect(req, res, next)
        .catch(err => next(err))
};

export {
    insertNewLongUrlRoute,
    getAllUrlRoute,
    getUrlRedirect
}
