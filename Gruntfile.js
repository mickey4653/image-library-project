module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // Read package.json to access project metadata
        sass: {
            dist: {
                files: {
                    './assignment/dist/css/styles.css': './assignment/src/scss/styles.scss', // Compile SCSS to CSS", 
                }
            }
        },
        watch: {
            CSS: {
                files: './assignment/src/scss/**/*.scss', // watch for changes in SCSS files
                tasks: ['sass'], // Run sass task when SCSS files change
                options: {
                    livereload: true // Enable live reload for SCSS changes
                }
            },
            html: {
                files: './assignment/src/index.html', // watch for changes in HTML files', 'src/index.html', // watch for changes in HTML files
                tasks: ['copy:html'], // Run copy:html task when HTML file changes
            }
        },
        uglify:{
            dist: {
                files: {
                    './assignment/dist/js/script.min.js': ['./assignment/src/js/*.js'] // Minify JS files
            }
        }
    },
    copy: {
        html: {
            files: [
              {  src: './assignment/src/index.html', // Copy HTML file from src to dist folder
                dest: './assignment/dist/index.html'} // Copy HTML file to dist folder
            ]
          
        }
    
    }
    });

//Load Grunt plugins
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-uglify');

// Register default task
grunt.registerTask('default', ['sass', 'watch', 'copy', 'uglify']);

};