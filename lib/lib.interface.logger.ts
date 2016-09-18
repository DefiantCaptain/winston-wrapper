export interface ILogger {
    info(msg:string, logObject?): void;
    debug(msg:string, logObject?): void;
    error(msg:string, logObject?): void;
    warn(msg:string, lobObject?): void;
}