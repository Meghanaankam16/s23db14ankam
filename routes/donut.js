var express = require('express');
const donut_controlers= require('../controllers/donut');
var router = express.Router();
/* GET costumes */
router.get('/', donut_controlers.donut_view_all_Page );
router.get('/detail', donut_controlers.donut_view_one_Page);
router.get('/create', donut_controlers.donut_create_Page);
router.get('/update', donut_controlers.donut_update_Page);

module.exports = router;