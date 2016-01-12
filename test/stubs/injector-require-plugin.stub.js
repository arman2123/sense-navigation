define( [], function () {
	return {
		load: function ( name, req, onload, config ) {
			console.log( "called requirejs load for " + name );
			//onload( "hello world" );

			// not working...
			inject( function ( $http ) {
				console.log( "inject proc done" );
			} );
			return;
		}
	};
} );


