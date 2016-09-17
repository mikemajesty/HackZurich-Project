var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();


gulp.task('dependencies', function() {
  gulp.src('bower_components/normalize-css/normalize.css')
  .pipe(rename('_normalize.scss'))
  .pipe(gulp.dest('scss/libs'));
});

gulp.task('sass', function() {
    gulp.src(['scss/app.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 20 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch('scss/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('*.html', []).on('change', browserSync.reload);
    gulp.watch(['app.js'], []).on('change', browserSync.reload);
});

gulp.task('default', ['dependencies', 'sass'], function() {
  gulp.start('watch');
});
