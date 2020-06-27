import 'source-map-support/register';

import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import { ApiResponse } from '../../response/ApiResponse';
import { getVideos } from "../businessLogic/videos";

export const handler = middy(async (_event, _context) => {
    const items = await getVideos();
    return new ApiResponse().successResponse(200, "data", items);
});

handler.use(cors());