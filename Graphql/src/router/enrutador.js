var router = express.Router()             


router.get('/', function(req, res) {
  res.json({ mensaje: '¡Bienvenido a nuestra API!' })  
})


app.use('/apiDoctorStrange', router)