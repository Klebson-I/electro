import { Router } from 'express';
export const offerRouter = Router();
offerRouter
    .get('/', (req, res) => {
    res.render('offer');
});
//# sourceMappingURL=offerRouter.js.map