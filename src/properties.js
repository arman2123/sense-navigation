/*global define*/
define( [
	'jquery',
	'underscore',
	'qlik',
	'ng!$http'
], function ( $, _, qlik, $http ) {

	return {

		fetch: function () {
			console.log( "fetch called" );

			var url = '/path/to/resource';

			$http.get( url ).success( function ( response ) {
				console.log( JSON.stringify( response ) );
			} );
		},

		fetch2: function () {
			var injector = angular.injector( ['ng'] );

			var $http = injector.get( '$http' );
			var $rootScope = injector.get( '$rootScope' );

			$rootScope.$apply( function () {
				$http.get( "/base/src/hello.html" )
					.then( function ( response ) {
						var names = response.data;
						console.log( "fetch 2:" );
						console.log( JSON.stringify( names ) );
					} );
			} );
		}

	};

	// ****************************************************************************************
	// Return Values
	// ****************************************************************************************
	//return panelDefinition;

} );
