export const getEnvVar = <T>(name: string, fallback: T): T =>
    process.env?.[name] as T ?? fallback;