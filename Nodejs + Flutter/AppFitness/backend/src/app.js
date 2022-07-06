const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const expressHbs = require('express-handlebars')
const _handlebars = require('handlebars')
const session = require('express-session')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const passport = require('passport')
    //const passport = require('passport')
const app = express();
require('./config/passport')

const morgan = require('morgan');
const cors = require('cors');

//Settings

app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', expressHbs.engine({
    handlebars: allowInsecurePrototypeAccess(_handlebars),
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.use(session({
    secret: 'secretApp',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize())
app.use(passport.session())
app.use(flash());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
//Variables globales
app.use((req, res, next) => {
        res.locals.success_msg = req.flash('success_msg')
        res.locals.success_msg_calorias = req.flash('success_msg_calorias')
        res.locals.error_msg = req.flash('error_msg')
        res.locals.error = req.flash('error')
        res.locals.user = req.user || null

        next()
    })
    //Routes
app.use(require('./routes/index.route'))
app.use(require('./routes/user.route'))
app.use(require('./routes/receta.route'))
app.use(require('./routes/rutina.route'))
app.use(require('./routes/calcularCalorias.route'))

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;