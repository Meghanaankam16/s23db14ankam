var express = require('express');
const donut_controlers= require('../controllers/donut');
var router = express.Router();
/* GET costumes */
router.get('/', donut_controlers.donut_view_all_Page );
router.get('/detail', donut_controlers.donut_view_one_Page);
module.exports = router;