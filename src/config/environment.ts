enum Env {
    Development = 'dev',
    Homologation = 'hml',
    Production = 'prd',
}
export class Environment {
    public static readonly Development: Env = Env.Development;
    public static readonly Homologation: Env = Env.Homologation;
    public static readonly Production: Env = Env.Production;

    private static envs = {
        dev: Env.Development,
        develop: Env.Development,
        development: Env.Development,
        local: Env.Development,
        hml: Env.Homologation,
        homolog: Env.Homologation,
        homologation: Env.Homologation,
        production: Env.Production,
        prod: Env.Production,
        prd: Env.Production,
    };

    static get current(): Env {
        const env = process.env.NODE_ENV ?? 'dev';

        return Environment.envs[env.toLocaleLowerCase()] ?? Env.Development;
    }
}
