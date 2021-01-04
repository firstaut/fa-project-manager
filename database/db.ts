import { Sequelize } from "sequelize-typescript";
import DatabaseConfig from '../src/config/db.config';
import path from 'path';

const { database, username, password, options } = new DatabaseConfig();
const sequelize = new Sequelize(database, username, password, options);

sequelize.addModels([path.resolve(__dirname + '/../src/models')]);

const connectDB: Function = async () => {
    await sequelize.authenticate().then(async() => {
        try {
            // await sequelize.sync({force: true});
            console.log("database connected")
        } catch (error) {
            console.log(error.message)
        }
    }).catch( (e: any) => {
        console.log(e.message)
    })
}

export {
    connectDB,
    sequelize
}
