var express = require('express');
const donut_controlers= require('../controllers/donut');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }

/* GET costumes */
router.get('/', donut_controlers.donut_view_all_Page );
router.get('/detail', donut_controlers.donut_view_one_Page);
router.get('/create', donut_controlers.donut_create_Page);
router.get('/update', secured, donut_controlers.donut_update_Page);
router.get('/delete', donut_controlers.donut_delete_Page);


module.exports = router;