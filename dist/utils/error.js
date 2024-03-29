export class ValidationError extends Error {
}
// remember to npm i express-async-errors and require('express-async-errors'); after main app gets to make the errorhandler work
export const errorHandle = (err, req, res, next) => {
    console.error(err);
    res
        .status(err instanceof ValidationError ? 400 : 500)
        .render('error', {
        message: err instanceof ValidationError ? err.message : "Server error, please try again later",
    });
};
//# sourceMappingURL=error.js.map