import * as mongoose from 'mongoose';
import appConfig from '../config/app.config';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect(appConfig().MONGODB_CONNECTION_STRING),
    },
];