const router = require('express').Router();
const {
  addDoc,
  listAllDocs,
  updateDoc,
  deleteDoc
} = require('../controllers/docs');

router
  .get('/', listAllDocs)
  .post('/', addDoc)
  .put('/:id', updateDoc)
  .delete('/:id', deleteDoc)

  module.exports = router