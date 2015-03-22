var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
//var uglify = require('gulp-uglify');
//var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['browserify'], function() {

});

// Browserify
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md
gulp.task('browserify', function() {
    // transform regular node stream to gulp (buffered vinyl) stream
    var browserified = transform(function(filename) {
        var b = browserify({entries: filename, debug: true});
        return b.bundle();
    });

    return gulp.src('./src/app.js')
        .pipe(browserified)
        //.pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        //.pipe(uglify())
        //.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'));
});