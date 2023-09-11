const express = require('express');
const router = express.Router();
const {
  create,
  read,
  update,
  delete: remove,
} = require('../Controllers/blogController'); 


router.get('/blog/create', create);
router.get('/blog/read', read);
router.get('/blog/delete', remove);
router.get('/blog/update', update);


router.get('/comment/create', create);
router.get('/comment/read', read);
router.get('/comment/delete', remove);
router.get('/comment/update', update);


router.get('/message/create', create);
router.get('/message/read', read);
router.get('/message/delete', remove);
router.get('/message/update', update);


router.get('/portfolio/create', create);
router.get('/portfolio/read', read);
router.get('/portfolio/delete', remove);
router.get('/portfolio/update', update);


router.get('/product/create', create);
router.get('/product/read', read);
router.get('/product/delete', remove);
router.get('/product/update', update);

module.exports = router;