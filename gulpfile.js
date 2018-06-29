var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();


var stylesFolder = './src/sass/**/*.scss';
var scriptsFolder = './src/js/**/*.js';
var pagesFolder = './src/*.html';

gulp.task('sass', function(){
    return gulp.src(stylesFolder)
    .pipe(sass({
        outputStyle:'compressed'
    }).on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest('./docs/css'))
    .pipe(browserSync.stream());
});


gulp.task('html', function(){
    return gulp.src(pagesFolder)
    .pipe(gulp.dest('./docs'))
    .pipe(browserSync.stream());
});

gulp.task('buildjs', function(){
    return gulp.src('./src/js/*.js')
    .pipe(concat('build.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./docs/js'))
    .pipe(browserSync.stream())
});

gulp.task('images', function(){
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('docs/img'))
        .pipe(browserSync.stream())
});

gulp.task('server', function(){
    browserSync.init({
        server:{
            baseDir:"docs"
        }
    });
    gulp.watch(stylesFolder,['sass']);
    gulp.watch(pagesFolder,['html'] );
    gulp.watch(scriptsFolder, ['buildjs']);
});