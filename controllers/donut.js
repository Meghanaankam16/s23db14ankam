var donut = require('../models/donut');
// List of all Costumes
exports.donut_list = function(req, res) {
 res.send('NOT IMPLEMENTED: donut list');
};
// for a specific Costume.
exports.donut_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: donut detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.donut_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: donut create POST');
};
// Handle Costume delete form on DELETE.
exports.donut_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: donut delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.donut_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: donut update PUT' + req.params.id);
};

// List of all donuts
exports.donut_list = async function(req, res) {
    try{
    thedonuts = await donut.find();
    res.send(thedonuts);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.donut_view_all_Page = async function(req, res) {
    try{
    thedonut = await donut.find();
    res.render('donut', { title: 'donut Search Results', results: thedonut });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };