var grunt = require('grunt');

require('load-grunt-tasks')(grunt);
grunt.loadNpmTasks('grunt-karma');

grunt.initConfig({
    clean: {
        dist: ['dist'],
        docs: ['docs'],
        test: ['.tmp']
    },
    babel: {
        options: {
            sourceMap: true,
            modules: 'ignore'
        },
        dist: {
            files: {
                'dist/ajax.js': 'src/ajax.es6'
            }
        },
        test: {
            files: {
                '.tmp/ajax.js': 'src/ajax.es6'
            }
        }
    },
    uglify: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'dist/ajax.min.js': ['dist/*.js']
            }
        },
        test: {
            files: {
                '.tmp/ajax.min.js': ['.tmp/*.js']
            }
        }
    },
    esdoc: {
        options: {},
        docs: {
            source: './src',
            destination: './docs'
        }
    },
    karma: {
        options: {
            frameworks: ['jasmine'],
            runnerPort: 9999,
            singleRun: true,
            files: ['.tmp/**/*.js'],
            browsers: ['Chrome']
        },
        unit: {
            files: [
                { src: ['test/*.js'] }
            ]
        }
    }
});

grunt.registerTask('build', ['clean:dist', 'babel:dist', 'uglify:dist']);

grunt.registerTask('esdoc', function(target) {
    var esdoc = require('esdoc');
    var publish = require('./node_modules/esdoc/out/src/Publisher/publish.js');
    var confs = grunt.config.get('esdoc');
    var options = confs.options || {};
    if (confs[target || 'default']) {
        for (var k in confs[target || 'default']) {
            options[k] = confs[target || 'default'][k];
        }
    }
    esdoc.generate(options, publish);
});

grunt.registerTask('docs', ['clean:docs', 'esdoc:docs']);

grunt.registerTask('test', ['clean:test', 'babel:test', 'uglify:test', 'karma', 'clean:test'])