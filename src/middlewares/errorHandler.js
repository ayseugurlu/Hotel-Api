'use strict'

module.exports = (err, req, res, next) => {
    console.log(err);
    return res.status(res?.errorStatusCode || 500).send({
        error: true,
        message: err.message,
        cause: err.cause,
        body: req.body
    });
}