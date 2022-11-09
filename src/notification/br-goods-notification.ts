import assert = require('assert');
import { log, RegexUtils } from 'type-commons-lib';
import { EmailDto } from './dto';
import { EmailService } from './email-service';

class Notification {
    private service = EmailService;

    /**
     * Send email using notification service
     * @param email {EmailDto}
     */
    @log()
    async sendEmail(email: EmailDto): Promise<void> {
        assert(email);
        assert(email.subject);
        assert(email.to);
        assert(email.templateKey);
        const emails = email.to.split(',');
        emails.forEach((e) => {
            if (!e.match(RegexUtils.EMAIL_VALIDATOR_REGEX)) {
                throw new Error('Invalid email address');
            }
        });
        await this.service.sendEmail(email);
    }
}

export const BrGoodNotification: Notification = new Notification();
