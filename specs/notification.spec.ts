import { HttpService } from 'type-commons-lib';
import { BrGoodNotification, EmailDto, EmailType, Environment } from '../src';

describe('[BrGoodNotification]', () => {
    let email: EmailDto;

    beforeEach(() => {
        jest.clearAllMocks();
        email = {
            subject: 'emailTest',
            to: 'test@test.com',
            templateKey: 'templateKey',
            templateParameters: { test: 'test' },
            type: EmailType.HTML,
        };
    });
    it('Should call notification service correctly', async () => {
        const spy = jest.spyOn(HttpService.prototype as any, 'post');
        spy.mockResolvedValue('');
        await BrGoodNotification.sendEmail(email);
        const param = spy.mock.calls[0][1];
        expect(spy).toBeCalled();
        expect(param).toMatchObject(email);
    });

    it('Should validate if is a valid email object', async () => {
        const spy = jest.spyOn(HttpService.prototype as any, 'post');

        expect(async () => await BrGoodNotification.sendEmail(null as unknown as EmailDto)).rejects.toThrow();
        expect(spy).not.toBeCalled();
    });

    it('Should validate email object has a valid destination email address', async () => {
        const spy = jest.spyOn(HttpService.prototype as any, 'post');
        email.to = null as unknown as string;
        expect(async () => await BrGoodNotification.sendEmail(email)).rejects.toThrow();
        expect(spy).not.toBeCalled();
    });

    it('Should validate email object has a valid destination email address format', async () => {
        const spy = jest.spyOn(HttpService.prototype as any, 'post');
        email.to = 'notValidemail';
        expect(async () => await BrGoodNotification.sendEmail(email)).rejects.toThrow();
        expect(spy).not.toBeCalled();
    });

    it('Should validate email object has a valid subject', async () => {
        const spy = jest.spyOn(HttpService.prototype as any, 'post');
        email.subject = null as unknown as string;
        expect(async () => await BrGoodNotification.sendEmail(email)).rejects.toThrow();
        expect(spy).not.toBeCalled();
    });

    it('Should validate email object has a valid template key', async () => {
        const spy = jest.spyOn(HttpService.prototype as any, 'post');
        email.templateKey = null as unknown as string;
        expect(async () => await BrGoodNotification.sendEmail(email)).rejects.toThrow();
        expect(spy).not.toBeCalled();
    });
    it('Validate environments', () => {
        process.env.NODE_ENV = undefined;
        expect(Environment.current).toBe(Environment.Development);
        process.env.NODE_ENV = 'local';
        expect(Environment.current).toBe(Environment.Development);
        process.env.NODE_ENV = 'development';
        expect(Environment.current).toBe(Environment.Development);
        process.env.NODE_ENV = 'dev';
        expect(Environment.current).toBe(Environment.Development);
        process.env.NODE_ENV = 'develop';
        expect(Environment.current).toBe(Environment.Development);

        process.env.NODE_ENV = 'homologation';
        expect(Environment.current).toBe(Environment.Homologation);
        process.env.NODE_ENV = 'homolog';
        expect(Environment.current).toBe(Environment.Homologation);
        process.env.NODE_ENV = 'hml';
        expect(Environment.current).toBe(Environment.Homologation);

        process.env.NODE_ENV = 'production';
        expect(Environment.current).toBe(Environment.Production);
        process.env.NODE_ENV = 'prod';
        expect(Environment.current).toBe(Environment.Production);
        process.env.NODE_ENV = 'prd';
        expect(Environment.current).toBe(Environment.Production);

        process.env.NODE_ENV = 'PRODUCTION';
        expect(Environment.current).toBe(Environment.Production);
        process.env.NODE_ENV = 'PROD';
        expect(Environment.current).toBe(Environment.Production);
        process.env.NODE_ENV = 'PRD';
        expect(Environment.current).toBe(Environment.Production);
    });
});
