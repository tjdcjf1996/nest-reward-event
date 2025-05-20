import { ConfigService } from '@nestjs/config';

export const mongoURI = {
  useFactory: async (configService: ConfigService) => {
    const MONGO_USER = configService.get<string>('database.mongo.username');
    const MONGO_PASS = configService.get<string>('database.mongo.password');
    const MONGO_HOST = configService.get<string>('database.mongo.host');
    const MONGO_PORT = configService.get<string>('database.mongo.port');
    const MONGO_DB = configService.get<string>('database.mongo.database');

    return {
      uri: `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`,
      maxPoolSize: 10,
      minPoolSize: 5,
    };
  },
  inject: [ConfigService],
};
