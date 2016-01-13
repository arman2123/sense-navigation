define( ['angular', 'angularmocks', 'properties'],
	function ( angular, angularmocks, props ) {

		describe( 'Dummy Tests', function () {
			var httpBackend;

			beforeEach( function () {
				angular.mock.module( 'ng' );
				angular.mock.inject( function ( $httpBackend ) {
					httpBackend = $httpBackend;
				} );
			} );

			afterEach( function () {
				httpBackend.verifyNoOutstandingExpectation();
				httpBackend.verifyNoOutstandingRequest();
			} );

			it( 'gets something', inject( function ( $httpBackend, $rootScope ) {
				// Setting up the mock response
				httpBackend.expectGET( '/something' ).respond( 'foo' );

				// Performs the GET operation
				props.doGet();

				// Flushes the response
				httpBackend.flush();
			} ) );

		} );

	}
);
