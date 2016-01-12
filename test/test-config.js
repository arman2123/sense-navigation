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
		'text': 'node_modules/requirejs-text/text',
		'angular': 'node_modules/angular/angular',
		'angularmocks': 'node_modules/angular-mocks/angular-mocks',
		'qlik': 'test/stubs/qlik.stub',
		'ng': 'test/stubs/injector-require-plugin.stub',
		'properties': 'src/properties',
		'initialproperties': 'src/initialproperties',
		'sinon': 'node_modules/sinon/pkg/sinon'
	}
	,
	shim: {
		"angular": {
			exports: "angular"
		},
		"angularmocks": {
			deps: ["angular"]
		},
		'underscore': {
			exports: '_'
		}
	},

	// loading all test files dynamically
	deps: allTestFiles,

	waitSeconds: 10,

	callback: window.__karma__.start
} );
