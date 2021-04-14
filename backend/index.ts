import * as dotenv from 'dotenv';
dotenv.config({path: process.env.NODE_ENV === 'test' ? '.env.test': '.env'})
import * as bodyParser from "body-parser";
import * as express from "express";


import CreateAcc1 from './routes/createAcoount'
import Login from './routes/login'
import Usuario from './routes/usuario'


import AdminLogin from "./routes/Admin"
import usuario from "./routes/usuario";
export const app = express();
app.use(require("cors")());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

/*dbConfig.sync({force:false}).then(()=>{
    console.log('Everything ok')//(USADO PARA CRIAR OS DBs)
})*/

//login/account
app.post('/autenticar/novo/usuario', CreateAcc1.createacc)
app.post('/autenticar', Login.trueLogin)
app.get('/usuario/:login', Usuario.getuser)

//admins
app.post('/adminlogin', AdminLogin.adminLogin)


app.listen(9111, ()=>{
    console.log('Connected to port 9111')
})


