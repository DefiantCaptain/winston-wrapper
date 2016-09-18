#Winston-Logger
This serves as a wrapper utility around winston for the purpose of logging transaction level requests in the Express
application server. This is essentially a middleware that adds to the Express req object the property `logger` that 
provides the methods `info`, `warn`, `debug`, and `error` that take the system message and a key-value object pair
of attributes that will be appended the transaction id that is generated and the timestamp.