var gulp = require('gulp');
var webpack = require('gulp-webpack');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('default', ['webserver', 'scripts', 'styles', 'watch'], function() {

});

gulp.task('scripts', function() {
    return gulp.src('src/**/*.js')
        .pipe(webpack({

            entry: "./src/index.js",

            output: {
                path: __dirname,
                filename: "main.js"
            },

            watch: true,

            module: {
                loaders: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel',
                    query: {
                        plugins: ['transform-runtime'],
                        presets: ['es2015']
                    }
                }]
            },

            resolve: {
                modulesDirectories: ["/usr/lib/node_modules", "node_modules"]
            },

            resolveLoader: {
                modulesDirectories: ["/usr/lib/node_modules", "node_modules"]
            },

            //enable source maps
            devtool: 'source-map'

        }))
        .pipe(gulp.dest('build'))
        .pipe(connect.reload());
});

gulp.task('styles', function() {
    return gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build'))
        .pipe(connect.reload());
});

gulp.task('webserver', function() {
    connect.server({
        livereload:true,
        port:8888
    })
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['scripts'], function() {});
    gulp.watch('src/**/*.scss', ['styles'], function() {});
});
