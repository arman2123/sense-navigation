define( ['angular'], function ( angular ) {

	return {

		load: function ( name, req, onload, config ) {

			var injector = angular.injector( ['ng'] );

			var $http = injector.get( '$http' );

			//var $rootScope = injector.get( '$rootScope' );
			//
			//$rootScope.$apply( function () {
			//	$http.get( "/base/src/hello.html" )
			//		.then( function ( response ) {
			//			var names = response.data;
			//			console.log( names );
			//		} );
			//} );

			onload( $http );

		}
	};
} );
