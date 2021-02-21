import winston from 'winston/lib/winston/config';
import { Config } from '../models';
import winstonConfig from './winston';

export const config: Config = {
  application: {
    port: parseInt(<string>process.env.PORT) || 3000
  },
  debug: {
    level: 'info'
  },
  database: {
    host: process.env.DB_HOST || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    name: process.env.DB_NAME || ''
  },
  winston: winstonConfig
};