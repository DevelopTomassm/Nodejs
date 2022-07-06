const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('inicio', { title: 'Vicchez' });
});
router.get('/myrincon', (req, res) => {
  res.render('myrincon', { title: 'My rincon Page' });
});
router.get('/photography', (req, res) => {
  res.render('fotografia', { title: 'Fotografia Page' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Page' });
});


module.exports = router;