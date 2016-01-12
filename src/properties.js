/*global define*/
define( [
	'jquery',
	'underscore',
	'qlik',
	'ng!$http',
	'ng!$q'
], function ( $, _, qlik, $http, $q ) {

	return {

		doGet: function () {
			console.log( "doGet operation called" );

			$http.get( '/something' )
				.then( function ( response ) {
					console.log( "success" );
					console.log( JSON.stringify( response ) );
				}, function ( response ) {
					console.log( "error" );
					console.log( JSON.stringify( response ) );
				} );

		}

	};

} );
