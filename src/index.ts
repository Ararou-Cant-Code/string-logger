import { type ILogger, Logger, LogLevel } from '@sapphire/framework';
import * as colors from 'colorette';
import { inspect, format } from 'util';
import { Timestamp } from '@sapphire/timestamp';

export class StringLogger extends Logger implements ILogger {
  public name: string;

  private timestamp: Timestamp = new Timestamp('YYYY-MM-DD HH:mm:ss');

  public constructor(level: LogLevel, name: string) {
    super(level);

    colors.createColors({
      useColor: true
    });
    this.name = name;
  }

  public write(level: LogLevel, values: unknown, args: readonly unknown[]) {
    if (level < this.level) return;

    let levelFormatted: string;

    switch (level) {
      case LogLevel.Trace:
        levelFormatted = colors.gray('TRACE');
        break;
      case LogLevel.Debug:
        levelFormatted = colors.blueBright('DEBUG');
        break;
      case LogLevel.Info:
        levelFormatted = colors.blue('INFO');
        break;
      case LogLevel.Warn:
        levelFormatted = colors.yellow('WARN');
        break;
      case LogLevel.Error:
        levelFormatted = colors.red('ERROR');
        break;
      case LogLevel.Fatal:
        levelFormatted = colors.bgRedBright('FATAL');
        break;
      default:
        levelFormatted = colors.gray('UNKNOWN');
        break;
    }

    const formatted =
      typeof values === 'string'
        ? format(values, ...args)
        : inspect(values, { colors: true });

    return console.log(
      `${colors.blue(`[${this.name} #${process.pid}]`)}${colors.white(
        ':'
      )} ${colors.white(
        this.timestamp.display(new Date())
      )} - ${levelFormatted}: ${formatted}`
    );
  }

  public override trace(values: unknown, ...args: readonly unknown[]): void {
    this.write(LogLevel.Trace, values, args);
  }

  public override debug(values: unknown, ...args: readonly unknown[]): void {
    this.write(LogLevel.Debug, values, args);
  }

  public override info(values: unknown, ...args: readonly unknown[]): void {
    this.write(LogLevel.Info, values, args);
  }

  public override warn(values: unknown, ...args: readonly unknown[]): void {
    this.write(LogLevel.Warn, values, args);
  }

  public override error(values: unknown, ...args: readonly unknown[]): void {
    this.write(LogLevel.Error, values, args);
  }

  public override fatal(values: unknown, ...args: readonly unknown[]): void {
    this.write(LogLevel.Fatal, values, args);
  }
}

export namespace StringLogger {
  export enum Level {
    Trace = 10,
    Debug = 20,
    Info = 30,
    Warn = 40,
    Error = 50,
    Fatal = 60
  }
}
