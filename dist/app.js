import * as express from 'express';
import 'express-async-errors';
import { engine } from 'express-handlebars';
import * as methodOverride from 'method-override';
import { homeRouter } from "./routes/homeRouter";
import { aboutUsRouter } from "./routes/aboutUs";
import { offerRouter } from "./routes/offerRouter";
import { galleryRouter } from "./routes/galleryRouter";
import { contactRouter } from "./routes/contactRouter";
import { errorHandle } from "./utils/error";
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_?"));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.get('/', (req, res) => {
    res.redirect('/home');
});
app.use('/home', homeRouter);
app.use('/aboutus', aboutUsRouter);
app.use('/offer', offerRouter);
app.use('/gallery', galleryRouter);
app.use('/contact', contactRouter);
app.use(errorHandle);
app.listen(3000, () => {
    console.log("App is running on localhost !");
});
//# sourceMappingURL=app.js.map