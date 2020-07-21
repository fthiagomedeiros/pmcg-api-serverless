import 'source-map-support/register';

import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import { ApiResponse } from '../../response/ApiResponse';

export const handler = middy(async (_event, _context) => {
    return new ApiResponse().version(200, {"id":1,"newsVersion":3,"videosVersion":22});
});

handler.use(cors());