var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');
var crisper = require('gulp-crisper');
var rename = require('gulp-rename');

gulp.task('default', function () {
    return gulp.src('window.html')
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            inlineScripts: false,
            stripExcludes: false
        }))
        .pipe(rename('build.html'))
        .pipe(crisper())
        .pipe(gulp.dest('.'));
});
