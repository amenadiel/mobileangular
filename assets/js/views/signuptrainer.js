define([
	'jquery',
	'underscore',
	'backbone',
	// Using the Require.js text! plugin, we are loaded raw text
	// which will be used as our views primary template
	//'text!views/resources/Columns/list.html'
], function (jQuery, _, Backbone) {


	var SignupTrainerView = Backbone.View.extend({

		el: '#modals',
		content: [
			'<div class="modal" id="signuptrainer" tabindex="-1" role="dialog" aria-labelledby="loginuserLabel" aria-hidden="true">',
			'<div class="modal-dialog">',
			'<div class="modal-content">',
			'<div class="modal-header">',
			'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>',
			'<h4 class="modal-title" id="loginuserLabel"><i class="glyphicon glyphicon-user"></i> Iniciar Sesión como Profesor</h4>',
			'</div>',
			'<div class="modal-body">',
			'<div class="row">',
			'<div class="col-sm-5 col-xs-5">',
			'<img class="avatar" src="/assets/images/no-avatar-male.png" />',
			'</div>',
			'<div class="col-sm-6 col-xs-6">',
			'<form role="form" class="form-inline" id="formsignuptrainer">',


			'<div class="form-group">',
			'<div class="input-group">',
			'<div class="input-group-addon"><i class="glyphicon glyphicon-user"></i></div>',
			//'<input type="password" class="form-control" id="loginuserInputPassword1" placeholder="password">',
			'<input type="text" class="form-control inputname" id="signuptrainerInputName" placeholder="nombre">',
			'</div>',
			'</div>',

			'<div class="form-group" >',
			'<div class="input-group">',
			'<div class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></div>',
			'<input type="email" class="form-control inputemail" id="signuptrainerInputEmail1" placeholder="email">',
			'</div>',
			'</div>',

			'<div class="form-group">',
			'<div class="input-group">',
			'<div class="input-group-addon"><i class="glyphicon glyphicon-phone"></i></div>',
			'<input type="celular" class="form-control inputcelular" id="signuptrainerInputCelular" placeholder="celular">',
			'</div>',
			'</div>',

			'</form>',
			'<small class="actualizate" style="margin: 10px 5px 0 0;display:block;clear:both;"></small>',
			'</div>',
			'</div>',
			'</div>',
			'<div class="modal-footer">',

			'<button type="button" class="btn  btn-facebook loggedout login"><i class="fa fa-facebook fa-navbar"></i> | Inicia Sesión con Facebook</button>',
			'<button type="button" class="btn  btn-facebook loggedin logout" style="display:none;"><i class="fa fa-facebook fa-navbar"></i> | Cerrar Sesión</button>',
			'<button type="button" class="btn  btn-craack loggedin updatedata" style="display:none;"><i class="glyphicon glyphicon-edit"></i>Actualizar Datos</button>',
			'<button type="button" class="btn  btn-craack loggedin gotomyprofile" style="display:none;"><i class="glyphicon glyphicon-cog"></i> Ir a tu Perfil</button>',
			'<button type="button" class="btn  btn-craack loggedin gotomycalendar" style="display:none;"><i class="glyphicon glyphicon-calendar"></i> Ir a tu Calendario</button>',
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


	return SignupTrainerView;
});