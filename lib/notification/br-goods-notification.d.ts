import { EmailDto } from './dto';
declare class Notification {
    private service;
    /**
     * Send email using notification service
     * @param email {EmailDto}
     */
    sendEmail(email: EmailDto): Promise<void>;
}
export declare const BrGoodNotification: Notification;
export {};
