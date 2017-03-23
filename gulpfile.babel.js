'use strict';

import gulp from 'gulp';
import path from 'path';
import connect from 'gulp-connect';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import clean from 'gulp-clean';
import sync from 'gulp-sync';
import concat from 'gulp-concat';
import eslint from 'gulp-eslint';

const gulpsync = sync(gulp);

const PROJECT_ROOT = path.join(__dirname);
const SRC = path.join(PROJECT_ROOT, 'src');
const BUILD = path.join(PROJECT_ROOT, 'build');


gulp.task('connect', function() {
   connect.server({
    root: BUILD,
    port: 8887,
  });
});

gulp.task('sass', function () {
  return gulp.src(path.join(SRC, 'scss/*.scss'))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(path.join(BUILD, 'css')));
});

gulp.task('js', function () {
  return gulp.src(path.join(SRC, 'js/*.js'))
   .pipe(babel({ presets: ['babel-preset-es2015'] }))
   .pipe(concat('bundle.js'))
   .pipe(gulp.dest(path.join(BUILD, 'js')));
});

gulp.task('lint', function() {
  return gulp.src([path.join(SRC, 'js/*.js'),'!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('clean', function() {
  return gulp.src(BUILD, {read: false})
    .pipe(clean());
});

gulp.task('build', function() {
  gulp.src(path.join(SRC, '*.html'))
    .pipe(gulp.dest(BUILD));
  return gulp.src(path.join(SRC, 'assets/**'))
    .pipe(gulp.dest(path.join(BUILD, 'assets')));
});

gulp.task('watch', function() {
    gulp.watch(path.join(SRC, 'scss/*.scss'), ['sass']);
    gulp.watch(path.join(SRC, 'js/*.js'), ['js', 'lint']);
    gulp.watch(path.join(SRC, 'assets/**'), ['build']);
});

gulp.task('default', gulpsync.sync(['clean', 'build', 'sass', 'js', 'lint', 'connect', 'watch']));

