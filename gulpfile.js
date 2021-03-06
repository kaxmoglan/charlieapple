const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-clean-css");
const sass = require("gulp-dart-sass");
const htmlmin = require("gulp-htmlmin");
const pug = require("gulp-pug");
const jsmin = require("gulp-terser");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const { parallel } = require("gulp");

const files = {
  src: {
    pug: "./src/pug/*.pug",
    pugIncludes: "./src/pug/includes/*",
    sass: "./src/sass/**/*.scss",
    js: "./src/js/**/*.js",
    images: "./src/images/**/*",
  },
  dest: {
    main: "./dist",
    images: "./dist/images",
    js: "./dist/js",
  },
};

// HTML
function html() {
  return gulp
    .src(files.src.pug)
    .pipe(pug())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(files.dest.main));
}

// CSS
function css() {
  return gulp
    .src(files.src.sass)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer("last 4 versions"))
    .pipe(cssmin())
    .pipe(gulp.dest(files.dest.main));
}

// JS
function js() {
  return gulp
    .src(files.src.js)
    .pipe(jsmin())
    .pipe(concat("app.js"))
    .pipe(gulp.dest(files.dest.js));
}

// IMAGES
function images() {
  return gulp
    .src(files.src.images)
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
      ])
    )
    .pipe(gulp.dest(files.dest.images));
}

// WATCH
function watch() {
  gulp.watch(files.src.pug, html);
  gulp.watch(files.src.pugIncludes, html);
  gulp.watch(files.src.sass, css);
  gulp.watch(files.src.js, js);
  gulp.watch(files.src.images, images);
}

// EXPORTS
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.watch = watch;
exports.build = parallel(html, css, js, images);
