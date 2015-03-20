var gulp = require('gulp');
var less = require('gulp-less');
var jade = require('gulp-jade');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var source = require('gulp-sourcemaps');

var jsLibs = ['src/media/js/libs/zepto.js'];
var jsScripts = ['src/media/js/scripts/script.js'];

// Run 'gulp --dev' for unminned and sourcemaps

var isProduction = true;
var sourceMap = false;

if(gutil.env.dev === true) {
    sourceMap = true;
    isProduction = false;
}

gulp.task('js-libs', function() {
    return gulp.src(jsLibs)
        .pipe(isProduction ? uglify().on('error', errorHandler) : gutil.noop())
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('js-scripts', function() {
    return gulp.src(jsScripts)
        .pipe(sourceMap ? source.init() : gutil.noop())
            .pipe(isProduction ? uglify().on('error', errorHandler) : gutil.noop())
            .pipe(concat('script.js'))
        .pipe(sourceMap ? source.write() : gutil.noop())
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('less', function () {
    return gulp.src('src/media/less/master.less')
        .pipe(sourceMap ? source.init() : gutil.noop())
            .pipe(less({
                compress: isProduction
            }))
        .pipe(sourceMap ? source.write() : gutil.noop())
        .pipe(gulp.dest('./build/media/css/'));
});
 
gulp.task('jade', function () {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('./build/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(jsLibs, ['js-libs']);
    gulp.watch(jsScripts, ['js-scripts']);
    gulp.watch('src/media/less/**/*.less', ['less']);
    gulp.watch('src/templates/**/*.jade', ['jade']);
});

gulp.task('default', ['watch', 'js-libs', 'js-scripts', 'less', 'jade']);

// Handle the error
function errorHandler (error) {
    console.log(error.toString());
    this.emit('end');
}