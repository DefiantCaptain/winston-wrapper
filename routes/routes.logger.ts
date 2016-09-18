import * as express from 'express';
import {Logger} from './../lib';

export let TransactionLogger = express.Router();

TransactionLogger.use((req, res, next) => {
    req.logger = new Logger();
});