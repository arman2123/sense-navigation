var TEST_REGEXP = /(spec|test)\.js$/i;
var allTestFiles = [];

Object.keys( window.__karma__.files ).forEach( function ( file ) {
	if ( TEST_REGEXP.test( file ) ) {
		// Normalize paths to RequireJS module names
		var normalizedTestModule = file.replace( /^\/base\/|\.js$/g, '' );
		allTestFiles.push( normalizedTestModule );
	}
} );

require.config( {
	// karma serves all files under the 'base' directory
	baseUrl: '/base',

	// module path mappings
	paths: {
		'jquery': 'node_modules/jquery/dist/jquery',
		'underscore': 'node_modules/underscore/underscore-min',
		'sinon': 'node_modules/sinon/pkg/sinon',
		'text': 'node_modules/requirejs-text/text',
		'qlik': 'test/stubs/qlik.stub',
		'angular': 'node_modules/angular/angular',
		'angularMocks': 'node_modules/angular-mocks/angular-mocks'
		//,
		//'ng': 'test/stubs/injector-require-plugin.stub'
	}
	,
	shim: {
		"angular": {
			exports: "angular"
		},
		"angularMocks": {
			deps: ["angular"]
		}
	},

	// loading all test files dynamically
	deps: allTestFiles,

	waitSeconds: 10,

	callback: window.__karma__.start
} );
