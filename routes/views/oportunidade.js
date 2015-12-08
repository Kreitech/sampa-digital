var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'oportunidade';
	
	// Load the galleries by sortOrder
	view.query('oportunidades', keystone.list('Oportunidade').model.find().sort('sortOrder'));
	
	// Render the view
	view.render('oportunidade');
	 
};