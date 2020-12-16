import * as dotenv from 'dotenv';
import { dotEnvOpts } from '../config/config.options';

dotenv.config(dotEnvOpts);
import * as dbConfig from '../config/config.database';

console.log(dbConfig.default);

module.exports = dbConfig.default;
