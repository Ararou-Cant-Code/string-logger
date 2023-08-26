import { Logger, ILogger, LogLevel } from '@sapphire/framework';

declare class StringLogger extends Logger implements ILogger {
    name: string;
    constructor(level: LogLevel, name: string);
    write(level: LogLevel, values: unknown, ...args: readonly unknown[]): void;
    trace(values: unknown, ...args: readonly unknown[]): void;
    debug(values: unknown, ...args: readonly unknown[]): void;
    info(values: unknown, ...args: readonly unknown[]): void;
    warn(values: unknown, ...args: readonly unknown[]): void;
    error(values: unknown, ...args: readonly unknown[]): void;
    fatal(values: unknown, ...args: readonly unknown[]): void;
}
declare namespace StringLogger {
    enum Level {
        Trace = 10,
        Debug = 20,
        Info = 30,
        Warn = 40,
        Error = 50,
        Fatal = 60
    }
}

export { StringLogger };
