import * as winston from 'winston';
import {ILogger} from "./lib.interface.logger";
import {Utilities} from "./lib.namespace.utilities";
import {LoggerInstance} from "winston";
const uuid = require('uuid');

export class Logger implements ILogger {
    private transactionID = uuid.v4();
    private logger : LoggerInstance;

    private normalize = (logObject) =>{
        if(logObject === null || logObject === undefined){
            return;
        }

        let cLogObject = Utilities.cloneObject(logObject);
        cLogObject["transactionID"] = this.transactionID;
        cLogObject["timestamp"] = Date.now();
        return cLogObject;
    };

    public info(msg:string, logObject?): void {
        this.logger.info(msg, logObject)
    }

    public debug(msg:string, logObject?): void {
        this.logger.debug(msg, logObject);
    }

    public error(msg:string, logObject?): void {
        this.logger.error(msg, logObject);
    }

    public warn(msg:string, logObject?): void {
        this.logger.warn(msg, logObject);
    }

    public normalizeWith(normalizer: (lobObject) => any) : ILogger {
        this.normalize = normalizer;
        return this;
    }

    constructor(logger?: LoggerInstance) {
        this.logger = logger || winston;
    }
}