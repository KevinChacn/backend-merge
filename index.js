const express = require('express');
const app = express();
const db = require('./src/infraestructure/database');
const morgan = require('morgan');
const cors = require('cors');
const { parameters } = require('./src/resources/UtilitiesClass');
const routers = require('./src/routes/appRouter.routes');


/* Asing port to run application */
app.set('port', parameters.PORT)


/* set middleware */
app.use(morgan('start'));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
    origin: [
        'http://localhost:4000',
        'http://localhost:4200',
    ]
}));

app.use('/merge', routers);

app.listen(app.get('port'), () => {
    console.log('Backend Express server listening on port', app.get('port'));
});