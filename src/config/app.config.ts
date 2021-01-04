import express, { Application } from "express";
import AuthRoutes from '../routes/auth.routes';
import MemberRoutes from '../routes/member.routes';


export default class App {

    private app: Application;

    constructor(private port?: number|string) {
        this.app = express();
        this.middlewares();
        this.settings();
        this.routes();
    }

    settings(): void {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }

    routes() {
        this.app.use('/auth', AuthRoutes);
        this.app.use('/members', MemberRoutes);
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    listen() {
        this.app.listen(this.app.get('port'));
        console.log(`Escuchando en el puerto: ${this.app.get('port')}`);
    }
}