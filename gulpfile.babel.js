'use strict';

import gulp from 'gulp';
import path from 'path';
// import connect from 'gulp-connect';
import babel from 'gulp-babel';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import clean from 'gulp-clean';
import sync from 'gulp-sync';
import eslint from 'gulp-eslint';
import concat from 'gulp-concat';
import browserSyncObj from 'browser-sync';

const gulpsync = sync(gulp);
const browserSync = browserSyncObj.create();

const PROJECT_ROOT = path.join(__dirname);
const SRC = `${PROJECT_ROOT}/src`;
const BUILD = `${PROJECT_ROOT}/build`;


gulp.task('serve', function() {
  browserSync.init({
    server: BUILD,
    port: 8887,
    open: 'external',
    host: '127.0.0.1',
    files: [`${BUILD}/**/*.css`, `${BUILD}/**/*.js`, `${BUILD}/*.html`], // watch files
  });
});

gulp.task('sass', function () {
  return gulp.src(`${SRC}/scss/*.scss`)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(`${BUILD}/css`));
});

gulp.task('js', function () {
  return browserify({entries: `${SRC}/js/app.js`, debug: true})
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(`${BUILD}/js`));
});

gulp.task('lint', function() {
  return gulp.src([`${SRC}/js/**/*.js`,'!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('clean', function() {
  return gulp.src(BUILD, {read: false})
    .pipe(clean());
});

gulp.task('build', function() {
  gulp.src(`${SRC}/*.html`)
    .pipe(gulp.dest(BUILD));
  return gulp.src(`${SRC}/assets/**`)
    .pipe(gulp.dest(`${BUILD}/assets`));
});

gulp.task('watch', function() {
    gulp.watch(`${SRC}/scss/**/*.scss`, ['sass']);
    gulp.watch(`${SRC}/js/**/*.js`, ['js', 'lint']);
    gulp.watch(`${SRC}/assets/**`, ['build']);
});

gulp.task('default', gulpsync.sync(['clean', 'build', 'sass', 'js', 'lint', 'serve', 'watch']));

