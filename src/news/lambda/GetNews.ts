import 'source-map-support/register';

import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import { ApiResponse } from '../../response/ApiResponse';
import { getNews } from "../businessLogic/news";

export const handler = middy(async (_event, _context) => {
    const items = await getNews();
    return new ApiResponse().successResponse(200, "data", items);
});

handler.use(cors());