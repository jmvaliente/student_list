const express = require('express');
const router = express.Router();
const controller = require('../controllers/base.controller');



router.get('/student/create',controller.create);
router.post('/student/:id/delete',controller.delete)
router.get('/student/:id/edit',controller.edit)
router.post('/student/:id/edit',controller.doEdit)
router.post('/student/create',controller.doCreate)

router.get('/student/list',controller.list);
router.get('/student/:id',controller.detail);
router.get('/', controller.base);

module.exports = router;