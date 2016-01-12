define( [
		'jquery',
		'angular'
	],
	function ( $, angular ) {
		describe( 'Dummy test', function () {
			//beforeEach(angular.module("test"));

			//beforeEach( angular.mock.inject( function ( $rootScope ) {
			//	console.log( "inject worked" );
			//} ) );

			it( "should always pass", function () {
				var $injector = angular.injector();
				console.log( $injector );
				//console.log( angularmocks );
				expect( 1 ).toBe( 1 );

			} );

			it( "should always pass", function () {
				var $injector = angular.injector();
				console.log( $injector );
				console.log( $injector );
				//console.log( angularmocks );
				expect( $injector.get( '$injector' ) ).toBe( $injector );

				var $injector2 = window.angular.injector( ['ng'] );
				var http = $injector2.get( '$http' );

				console.log( http );
			} );

			it( "should always pass", function () {
				var $injector = angular.injector();
				console.log( $injector );
				//console.log( angularmocks );

				expect( $injector.invoke( function ( $injector ) {
					return $injector;
				} ) ).toBe( $injector );
			} );

			//it( "sets extension's scope with data", function () {
			//	var x;
			//	//angular.inject( function ( $rootScope ) {
			//	//	x = $rootScope.$new();
			//	//} );
			//
			//	console.log( angular.mock );
			//
			//	inject( function ( $rootScope ) {
			//	} );
			//
			//	//expect( x ).not.toBe( undefined );
			//} );
		} );
	}
);
