import { Router } from 'express';
export const galleryRouter = Router();
galleryRouter
    .get('/', (req, res) => {
    res.render('gallery');
});
//# sourceMappingURL=galleryRouter.js.map