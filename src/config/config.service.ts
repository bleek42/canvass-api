import * as dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import Joi from '@hapi/joi';

import { EnvConfig } from '../interfaces/env-config.interface';

@Injectable()
export default class ConfigService {
  private readonly envConfig: EnvConfig;

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarSchema: Joi.objectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid('development', 'test')
        .default('development'),
      HTTP_PORT: Joi.number().required(),
    }).unknown(true);

    const { error, value: validatedEnvConfig } = envVarSchema.validate(
      envConfig,
    );

    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }

  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }
}
