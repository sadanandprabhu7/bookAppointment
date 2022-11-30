const path = require('path');

const express = require('express');

const mainController = require('../controllers/main');

const router = express.Router();

router.post('/save',mainController.addingDetails)

router.get('/',mainController.showUsers)

router.delete('/:id',mainController.deleteUsers)

module.exports=router;