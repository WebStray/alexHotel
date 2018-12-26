const gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('less', function() {
    gulp
        .src('./app/css/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
});