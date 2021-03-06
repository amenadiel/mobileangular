define([
	'jquery',
	'underscore',
	'backbone',
	// Using the Require.js text! plugin, we are loaded raw text
	// which will be used as our views primary template
	//'text!views/resources/Columns/list.html'
], function (jQuery, _, Backbone) {


	var SignupUserView = Backbone.View.extend({

		el: '#modals',

		content: [
			'<div class="modal" id="signupuser" tabindex="-1" role="dialog" aria-labelledby="signupuserLabel" aria-hidden="true">',
			'<div class="modal-dialog">',
			'<div class="modal-content">',
			'<div class="modal-header">',
			'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>',
			'<h4 class="modal-title" id="signupuserLabel"><i class="glyphicon glyphicon-user"></i> Inscribirse como Usuario</h4>',
			'</div>',
			'<div class="modal-body">',
			'<div id="status"></div>',
			'<form role="form" class="form-inline">',
			'<div class="form-group" id="formsignupuser">',
			'<label for="signupuserInputEmail1">Email</label>',
			'<input type="email" class="form-control" id="signupuserInputEmail1" placeholder="Ingresar email">',
			'</div>',
			'<div class="form-group">',
			'<label for="signupuserInputPassword1">Password</label>',
			'<input type="password" class="form-control" id="signupuserInputPassword1" placeholder="Ingresar Password">',
			'</div>',
			'</form>',
			'</div>',
			'<div class="modal-footer">',
			'<button type="button" class="btn  btn-facebook loggedout"><i class="fa fa-facebook fa-navbar"> | Inicia Sesión con Facebook</button>',
			'<button type="button" class="btn  btn-facebook loggedin logout"><i class="fa fa-facebook fa-navbar"> | Cerrar Sesión</button>',
			'</div>',
			'</div>',
			'</div>',
			'</div>',
		].join(''),

		initialize: function (callback) {

			jQuery(this.el).append(this.content);
			if (callback) callback();
		},



	});


	return SignupUserView;
});