import path from 'path';

const env = process.env.NODE_ENV || 'development';
const p = path.join(process.cwd(), `env/${env}.env`);
console.log(`loading environment from ${p}...`);

const dotEnvOpts = {
  path: p,
};

export { dotEnvOpts };
