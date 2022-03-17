const express = require('express');
const sermonController = require('../controllers/sermon-controller');

const router = new express.Router();

router.get('/', sermonController.getSermonIndex);

router.get('/create', sermonController.getSermonCreate);

router.get('/:id', sermonController.getSermonDetail);

router.get('/:id/update', sermonController.getSermonUpdate);

router.post('/', sermonController.createSermon);

router.patch('/:id', sermonController.updateSermon);

router.delete('/:id', sermonController.deleteSermon);

module.exports = router;
