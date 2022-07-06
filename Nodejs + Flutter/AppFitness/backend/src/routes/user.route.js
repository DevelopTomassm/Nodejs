const { Router } = require('express');
const { consultarusers, agregarusers, eliminarusers, modificarusers } = require('../controllers/user.controller');
const router = Router();
const User = require('../models/user.model');
const passport = require('passport')
const { isAuthenticated } = require('../helpers/auth')
    //PETICIONES EMVIADAS AL FRONTEND
router.get('/api/users', consultarusers);
router.post('/api/users/signup', agregarusers);
router.put('/api/users/edit', modificarusers);
router.delete('/api/users/delete/:id', eliminarusers);
router.post('/registro', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            console.log(err)
            res.json(err)
        } else {
            if (user == null) {
                const user = User({
                    nombre: req.body.nombre,
                    email: req.body.email,
                    password: req.body.password
                })
                user.save()
                    .then((err) => {
                        if (err) {
                            console.log(err)
                            res.json(err)
                        } else {
                            console.log(user)
                            res.json(user)
                        }
                    })
            } else {
                res.json({
                    message: 'email no disponible'
                })
            }
        }
    })
})
router.post('/login', (req, res) => {
        let body = req.body;
        User.findOne(body, (err, usuarioEncontrado) => {
            if (err) throw err;
            if (!usuarioEncontrado) {
                res.json({
                    message: 'Usuario no encontrado'
                })
            }
            if (usuarioEncontrado) {
                console.log("USUARIO ENCONTRADO ", usuarioEncontrado);
                console.log("EMAIL ", usuarioEncontrado.email);
                console.log("PASSWORD ", usuarioEncontrado.password);
                res.json(usuarioEncontrado)
            }
        });
    })
    //PETICONES WEB
router.get('/users/signin', (req, res) => {
    res.render('users/signin');
})
router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/signin',
    failureFlash: true
}))
router.get('/users/signup', (req, res) => {
    res.render('users/signup');
})

router.get('/users/logout', (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
})
router.get('/profile', isAuthenticated, (req, res) => {
    res.render('users/profile');
})
router.post('/users/signup', async(req, res) => {
    const { nombre, email, password, confirm_password } = req.body;
    const errors = []
    if (nombre.length <= 0) {
        errors.push({ text: 'Introduzca un nombre' })
    }
    if (email.length <= 0) {
        errors.push({ text: 'Introduzca un correo' })
    }
    if (password.length <= 0 || confirm_password.length <= 0) {
        errors.push({ text: 'Introduzca una contraseña' })
    }
    if (password != confirm_password) {
        errors.push({ text: 'Las contraseñas no coinciden' })
    }
    if (password.length < 4) {
        errors.push({ text: 'La contraseña tiene que ser al menos de 4 caracteres' })
    }
    if (errors.length > 0) {
        res.render('users/signup', { errors, nombre, email, password, confirm_password })
    } else {
        const emailUser = await User.findOne({ email: email }).lean()
        console.log(emailUser);
        if (emailUser != null) {
            req.flash('error_msg', 'El email ya esta en uso')
            res.redirect('/users/signup')
        } else {
            const newUser = new User({ nombre, email, password })
            newUser.password = await newUser.hashPass(password)
            await newUser.save()
            req.flash('success_msg', 'Te has registrado correctamente')
            res.redirect('/users/signin')
        }
    }
})

module.exports = router;