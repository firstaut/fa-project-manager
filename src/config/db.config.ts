import { SequelizeOptions } from "sequelize-typescript";
import path from 'path';
import Admin from "../models/admin.model";
import User from "../models/user.model";
import Member from "../models/member.model";



export default class DatabaseConfig {
    
    public database: string;
    public username: string;
    public password: string;
    public options?: SequelizeOptions;

    constructor() {
        this.init();
    }

    init() {
        this.database = 'fa_db';
        this.username = 'root';
        this.password = '';
        this.options = {
            host: 'localhost',
            dialect: 'mysql',
            models: [path.resolve(__dirname + '/../models')]
            // models: [
            //     User,
            //     Admin,
            //     Member
            // ]
        };
    }
}



