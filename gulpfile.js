var gulp = require('gulp');
var less = require('gulp-less');
var jade = require('gulp-jade');
 
gulp.task('less', function () {
    return gulp.src('src/media/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('./build/media/css/'));
});
 
gulp.task('jade', function () {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('./build/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch('src/media/style.less', ['less']);
    gulp.watch('src/templates/**/*.jade', ['jade']);
});

gulp.task('default', ['watch', 'less', 'jade']);
