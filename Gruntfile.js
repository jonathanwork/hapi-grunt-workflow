module.exports = (grunt)=> {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    //watching sass file here
    ,watch: {
      css: {
        files: 'source/**/*.sass'
        ,tasks: ['sass']
      }
      ,babel_watcher: {
        files: ['source/js/**/*.js', 'server-source/**/*.js']
        ,tasks: ['babel']
      }
    }


    //sass file go here
    ,sass: {
      dev: {
        files: {
          'app/css/main.css':'source/sass/main.sass'
        }
      }
    }

    // browserSync config goes here
    ,browserSync: {
      dev: {
        bsFiles: {
          src: [
            'app/css/*.css'
            ,'app/*.html'
          ]
        }
        ,options: {
          watchTask: true
          ,proxy: '0.0.0.0:8080'
        }
      }
    }

    ,babel: {
      options: {
        sourceMap: false
        ,presets: ['babel-preset-es2015']
      }
      ,dist: {
        files: [
            // this is client js source
            {
                expand: true,
                cwd: 'source/js',
                src: ['**/*.js'],
                dest: 'app/js'
            }
            // this is server source code
            ,{
                  expand: true,
                  cwd: 'server-source/',
                  src: ['**/*.js'],
                  dest: 'server/'
              }
        ]

      }
    }//end of babel obj

    exec: {
      webpack_compiler: {
        cmd: function(firstName, lastName) {
          var formattedName = [
            lastName.toUpperCase(),
            firstName.toUpperCase()
          ].join(', ');

          return 'echo ' + formattedName;
        }
      }
    }

  });

  //loading up tasks --------------------------------
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('load-grunt-tasks');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-exec');
  //resgistering task --------------------------------

  grunt.registerTask('default', ['browserSync', 'watch', 'babel']);
}
