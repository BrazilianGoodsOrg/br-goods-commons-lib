import { Environment } from './environment';

export class AppEnv {
    public static readonly NOTIFICATION_BASE_URL = process.env.NOTIFICATION_SERVICE_BASE_URL ?? `https://3jvup5p0n3.execute-api.us-east-1.amazonaws.com/${Environment.current}`;
}
