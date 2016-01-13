define( ['angular', 'angularmocks', 'properties', 'ng!$http', 'sinon'],
	function ( angular, angularmocks, props, $http, sinon ) {
		describe( 'Dummy test', function () {

			it( "test", function () {
				sinon.stub( $http, "get", function ( url ) {
					console.log( "stub called for $http" );
				} );

				props.fetch();

				sinon.assert.called( $http.get );

				$http.get.restore();
			} );

		} );
	}
);
