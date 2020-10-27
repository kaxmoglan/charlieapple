const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-clean-css");
const sass = require("gulp-dart-sass");
const htmlmin = require("gulp-htmlmin");
const pug = require("gulp-pug");
const jsmin = require("gulp-terser");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");

const files = {
  src: {
    pug: "./src/pug/**/*.pug",
    sass: "./src/sass/**/*.scss",
    js: "./src/js/**/*.js",
    images: "./src/images/*",
  },
  dest: {
    main: "./dist",
    images: "./dist/images",
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
    .pipe(concat("script.js"))
    .pipe(jsmin())
    .pipe(gulp.dest(files.dest.main));
}

// IMAGES
function images() {
  return gulp
    .src(files.src.images)
    .pipe(imagemin())
    .pipe(gulp.dest(files.dest.images));
}

// EXPORTS
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
