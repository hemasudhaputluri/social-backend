require('dotenv').config();

const app = {
  port: parseInt(process.env.WEB_PORT, 10) || 3000,
  env: process.env.NODE_ENV || 'development',
};

const postgres = {
  dbName: process.env.POSTGRES_DB_NAME,
  user: process.env.POSTGRES_DB_USER,
  password: process.env.POSTGRES_DB_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
  dialect: process.env.POSTGRES_DIALECT || 'postgres',
};
/*
const mongo = {
  uri: process.env.MONGO_URI,
  dbName: process.env.MONGO_DB_NAME,
};

const redis = {
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT, 10) || 6379,
};

const elastic = {
  host: process.env.ELASTIC_HOST,
  username: process.env.ELASTIC_USERNAME,
  password: process.env.ELASTIC_PASSWORD,
};

const media = {
  storageType: process.env.MEDIA_STORAGE_TYPE || 'local',
  storagePath: process.env.MEDIA_STORAGE_PATH || '/uploads',
  s3: {
    bucket: process.env.MEDIA_S3_BUCKET || '',
    accessKey: process.env.MEDIA_S3_ACCESS_KEY || '',
    secretKey: process.env.MEDIA_S3_SECRET_KEY || '',
    region: process.env.MEDIA_S3_REGION || '',
  },
};
*/
module.exports = {
  app,
  postgres,
  /* mongo,
  redis,
  elastic,
  media,
  */
};

