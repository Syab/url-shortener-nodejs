import * as HttpPaths from '../../../../common/constants/paths';

import { Router } from 'express';

const shortUrlAPI = new Router();

shortUrlAPI.get(HttpPaths.GET_OG_URL,);
shortUrlAPI.post(HttpPaths.ADD_OG_URL,);
shortUrlAPI.delete(HttpPaths.DELETE_OG_URL);

shortUrlAPI.get(HttpPaths.GET_SHORT_URL,);

module.exports = shortUrlAPI;