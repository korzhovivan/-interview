'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
sass.compiler = require('node-sass');
const watchSass = require("gulp-watch-sass")

gulp.task('scss', function () {
   return gulp.src('./scss/**/*.scss')
   .pipe(concat('styles.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css/'));
});

gulp.task("scss:watch", () => watchSass([
    "./scss/**/*.scss",
    "!./public/libs/**/*"
  ])
    .pipe(sass())
    .pipe(gulp.dest("./css/")));