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
            modules: 'ignore'
        },
        dist: {
            options: {
                sourceMap: true
            },
            files: {
                'dist/ajax.js': 'src/ajax.next.js'
            }
        },
        test: {
            files: {
                '.tmp/ajax.js': 'src/ajax.next.js'
            }
        }
    },
    uglify: {
        options: {
            sourceMap: false
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
    jsdoc2md: {
        docs: {
            files: [
                { src: 'src/ajax.next.js', dest: 'docs/ajax.md' }
            ]
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

grunt.registerTask('docs', ['clean:docs', 'jsdoc2md:docs']);

grunt.registerTask('test', ['clean:test', 'babel:test', 'uglify:test', 'karma', 'clean:test'])
