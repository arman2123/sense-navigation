define( ['angular'], function ( angular ) {
	return {
		load: function ( name, req, onload, config ) {
			console.log( "called requirejs load for " + name );
			//onload( "hello world" );

			var $injector = window.angular.injector( ['ng'] );
			var service = $injector.get( name );

			onload( service );

			console.log( "Service injected" );
		}
	};
} );


