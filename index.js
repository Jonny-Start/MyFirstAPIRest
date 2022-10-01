import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routers.js'
import {PORT} from './config/config.js'

const app = express()

//Settings
// app.set('port', process.env.PORT || 3000);
app.listen(PORT)
console.log('Server running on port', PORT)
app.use(express.json());

//Middlewares

//Routes
// app.use('/api/',indexRoutes);
app.use(indexRoutes);
app.use(employeesRoutes);

app.use((req, res, next)=>{
    res.status(404).json({
        message: 'endpoint not found'
    })
})


//Starting the server
// app.listen(app.get('port'), () => {
//     console.log('Server on port ', app.get('port'));
// });