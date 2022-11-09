import { HttpService } from 'type-commons-lib';
import { EmailDto } from './dto';
declare class EmailServiceImpl extends HttpService {
    constructor();
    sendEmail(email: EmailDto): Promise<void>;
}
export declare const EmailService: EmailServiceImpl;
export {};
