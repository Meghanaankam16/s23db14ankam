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

// Handle Costume create on POST.
exports.donut_create_post = async function(req, res) {
    console.log(req.body)
    let document = new donut();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.donut_name = req.body.donut_name;
    document.donut_price = req.body.donut_price;
    document.donut_store = req.body.donut_store;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   exports.donut_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await donut.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

//New code for Assignment 12 for screenshot2
//Handle donut update form on PUT
exports.donut_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await donut.findById(req.params.id)
        // Do updates of properties
        if (req.body.donut_name)
            toUpdate.donut_name = req.body.donut_name;
        if (req.body.donut_price) toUpdate.donut_price= req.body.donut_price;
        if (req.body.donut_store) toUpdate.donut_store= req.body.donut_store;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

//ss4 ss5
// Handle Costume delete on DELETE.
exports.donut_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await donut.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
  

    //ss6
    // Handle a show one view with id specified by query
    exports.donut_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await donut.findById( req.query.id)
    res.render('donutdetail',
    { title: 'Donut Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    //ss7
    // Handle building the view for creating a costume.
    // No body, no in path parameter, no query.
    // Does not need to be async
    exports.donut_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('donutcreate', { title: 'Donut Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    //ss8
    // Handle building the view for updating a costume.
// query provides the id
    exports.donut_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await donut.findById(req.query.id)
    res.render('donutupdate', { title: 'Donut Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    //ss9
    // Handle a delete one view with id from query
    exports.donut_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await donut.findById(req.query.id)
    res.render('donutdelete', { title: 'Donut Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    