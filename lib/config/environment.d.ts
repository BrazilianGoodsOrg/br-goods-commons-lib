declare enum Env {
    Development = "dev",
    Homologation = "hml",
    Production = "prd"
}
export declare class Environment {
    static readonly Development: Env;
    static readonly Homologation: Env;
    static readonly Production: Env;
    private static envs;
    static get current(): Env;
}
export {};
