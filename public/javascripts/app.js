requirejs.config({
	shim: {
		'jquery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		}
	}
});

define([
		'jquery',
		'chat',
		'login'
	], function($, Chat, Login) {

		var login;

		$(document).ready(function() {
			var chat = new Chat({
				userListDiv: '#left-sidebar',
				messagesUl: '#chat-room .chat-box ul',
				messageScroll: '#content-body',
				messageEntryForm: '#message-entry-form',
				messageEntry: '#message-entry'
			});

			// TODO: Move all chat logic out of Login and provide callback for loginSuccess.
			login = new Login(
				chat,
				{
					usernameInput: '#usernameInput',
					loginForm: '#login',
					logout: '#logout'
				}
			);
		});

		return login;
});
