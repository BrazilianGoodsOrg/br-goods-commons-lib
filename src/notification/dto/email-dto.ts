import { EmailType } from '../enum';

export interface EmailDto {
    subject: string;
    to: string;
    type: EmailType;
    templateKey: string;
    templateParameters: { [key: string]: string | number };
}
