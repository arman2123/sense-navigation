define( ['angular', 'angularMocks', 'properties'],
	function ( angular, angularMocks, props ) {
		describe( 'Dummy test', function () {

			var httpBackend, http;

			beforeEach( function () {
				inject( function ( $httpBackend, $http ) {
					httpBackend = $httpBackend;
					http = $http;
				} );
			} );

			afterEach( function () {
			} );

			it( "should always pass", function () {
				expect( 1 ).toBe( 1 );
			} );

			it( 'should fetch authentication token', function () {
				httpBackend.expectGET( '/hello.html' ).respond( "RESULT" );
				http.get( '/hello.html' );
				//props.fetch();
				httpBackend.flush();
			} );

		} );
	}
);
