import App from './src/config/app.config';
import { connectDB } from './database/db';
import User from './src/models/user.model';

// Listen server on 4000
async function main() {
    const app: App = new App;
    app.listen();
    await connectDB();
    // const user = new User({ userId: null, fullname: 'asdasdasd'});
    // const user2 = new User({ userId: null, fullname: 'asdasdasd111111'});
    
}

// Run
main();