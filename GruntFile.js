module.exports = function(grunt){
    grunt.initConfig({
        traceur: {
            options: {
                experimental:true
            },
            custom: {
                files:{
                    'build/app.js': "js/**/*.js"
                }
            }
        },

        watch: {
            files:"js/**/*.js",
            tasks: "traceur"
        }
    });

    grunt.loadNpmTasks('grunt-traceur-latest');
    grunt.loadNpmTasks('grunt-contrib-watch');
}