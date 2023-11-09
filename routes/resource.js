var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var donut_controller = require('../controllers/donut');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a donut.
router.post('/donut', donut_controller.donut_create_post);
// DELETE request to delete donut.
router.delete('/donut/:id', donut_controller.donut_delete);
// PUT request to update donut.
router.put('/donut/:id', donut_controller.donut_update_put);
// GET request for one donut.
router.get('/donut/:id', donut_controller.donut_detail);
// GET request for list of all donut items.
router.get('/donut', donut_controller.donut_list);
module.exports = router;
