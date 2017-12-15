'use strict';

var gulp = require('gulp'),
    clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src(['./dist/*'], {read: false})
               .pipe(clean({force: true}));
});

gulp.task('build', ['clean'], function () {
    return gulp.src('./source/**/*', {base: './source/' })
               .pipe(gulp.dest('dist'));

});