/* const express= require('express')
const router= express.Router()
const indexController= require('../controllers/indexController')

router.get('/', indexController.home)
router.get('/about', indexController.about)

module.exports= router */

                 /*forma refactorizada*/
const indexController= require('../controllers/indexController')

module.exports= router= require('express').Router()
 .get('/', indexController.home)
 .get('/about', indexController.about)