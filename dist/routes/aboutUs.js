import { Router } from 'express';
export const aboutUsRouter = Router();
aboutUsRouter
    .get('/', (req, res) => {
    res.render('aboutUs');
});
//# sourceMappingURL=aboutUs.js.map