import * as HttpPaths from '../../../../common/constants/paths';
import { Router } from 'express';
import {
    insertNewLongUrlRoute, getAllUrlRoute, getUrlRedirect
} from "./ShortUrlRouter";

const shortUrlAPI = new Router();

shortUrlAPI.get(HttpPaths.GET_ALL_URL, getAllUrlRoute);
shortUrlAPI.post(HttpPaths.ADD_OG_URL, insertNewLongUrlRoute);
shortUrlAPI.get(HttpPaths.GET_SHORT_URL, getUrlRedirect);

module.exports = shortUrlAPI;