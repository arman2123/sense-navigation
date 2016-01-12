define( ['angular', 'angularmocks', 'properties'],
	function ( angular, angularmocks, props, $http ) {
		describe( 'Dummy test', function () {
			//var httpBackend, http;

			//beforeEach( function () {
			//	//module( 'ng' );
			//	inject( function ( $httpBackend, $http ) {
			//		httpBackend = $httpBackend;
			//		http = $http;
			//
			//		$http.get("www.google.se").then( function ( response ) {
			//			console.log( "success" );
			//		}, function ( response ) {
			//			console.log( JSON.stringify( response ) );
			//		} );
			//	} );
			//} );

			//it( 'should fetch page', function () {
			//	inject( function ( $httpBackend ) {
			//		console.log( "Expecting get" );
			//		$httpBackend.expectGET( '/abc' ).respond( "RESULT" );
			//		props.fetch();
			//		console.log( "Expecting flush" );
			//		$httpBackend.flush();
			//	} );
			//} );

			//it( "expects GET http calls and returns mock data", inject( function ( $httpBackend ) {
			//	var url = '/path/to/resource';
			//
			//	// Create expectation
			//	$httpBackend.expectGET( "/base/src/hello.html" ).respond( 200, 'mock data' );
			//
			//	//// Call http service
			//	//$http.get( url ).success( function ( response ) {
			//	//	console.log( JSON.stringify( response ) );
			//	//} );
			//
			//	$http( {
			//		method: 'GET',
			//		url: url
			//	} ).then( function successCallback ( response ) {
			//		console.log( "success" );
			//	}, function errorCallback ( response ) {
			//		console.log( "error" );
			//	} );
			//
			//	// flush response
			//	$httpBackend.flush();
			//
			//} ) );

			it( "test", function () {
				props.fetch2();
				console.log( "test 1" );
			} );

		} );
	}
);
