/*global define*/
define( [
	'jquery',
	'underscore',
	'qlik',
	'ng!$http',
	'ng!$q'
], function ( $, _, qlik, $http, $q ) {

	return {

		fetch: function () {
			$http.get( "/base/src/hello.html" );
		}

	};

} );
