define( ['angular'], function ( angular ) {

	return {

		load: function ( name, req, onload, config ) {
			console.log( "require module load called for " + name );

			var injector = angular.injector( ['ng'] );

			var service = injector.get( name );

			onload( service );
		}
	};
} );
