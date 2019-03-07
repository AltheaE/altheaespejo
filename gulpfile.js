const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./scss/index.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.series['sass']);
})

