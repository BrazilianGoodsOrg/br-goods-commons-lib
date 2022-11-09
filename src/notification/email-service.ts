import { HttpService, log } from 'type-commons-lib';
import { AppEnv } from '../config';
import { EmailDto } from './dto';

class EmailServiceImpl extends HttpService {
    constructor() {
        super({
            baseUrl: AppEnv.NOTIFICATION_BASE_URL,
        });
    }

    @log()
    async sendEmail(email: EmailDto): Promise<void> {
        await this.post('/api/v1/notifications/emails', email);
    }
}

export const EmailService: EmailServiceImpl = new EmailServiceImpl();
