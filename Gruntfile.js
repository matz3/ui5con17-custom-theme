"use strict";

module.exports = function(grunt) {

	grunt.initConfig({

		connect: {
			options: {
				port: 8080,
				hostname: "*"
			},
			src: {}
		},

		openui5_connect: {
			src: {
				options: {
					resources: [
						"bower_components/openui5-sap.ui.core/resources",
						"bower_components/openui5-sap.m/resources",
						"bower_components/openui5-sap.ui.layout/resources",
						"bower_components/openui5-themelib_sap_belize/resources",
						"src"
					],
					testresources: [
						"bower_components/openui5-sap.ui.core/test-resources",
						"bower_components/openui5-sap.m/test-resources",
						"bower_components/openui5-sap.ui.layout/test-resources",
						"bower_components/openui5-themelib_sap_belize/test-resources",
						"test"
					]
				}
			}
		},

		openui5_theme: {
			theme: {
				files: [
					{
						expand: true,
						cwd: "src",
						src: "**/themes/*/library.source.less",
						dest: "dist/resources"
					}
				],
				options: {
					compiler: {
						compress: false
					},
					rootPaths: [
						"bower_components/openui5-sap.ui.core/resources",
						"bower_components/openui5-sap.m/resources",
						"bower_components/openui5-sap.ui.layout/resources",
						"bower_components/openui5-themelib_sap_belize/resources",
						"src"
					]
				}
			}
		},

	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-openui5");

	// Server task
	grunt.registerTask("serve", function(target) {
		grunt.task.run("openui5_connect:" + (target || "src") + ":keepalive");
	});

	// Build task
	grunt.registerTask("build", ["openui5_theme"]);

	// Default task
	grunt.registerTask("default", [
		"clean",
		"build"
	]);

};
