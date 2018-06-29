var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync').create();


var stylesFolder = './src/sass/**/*.scss';
var pagesFolder = './src/*.html';

gulp.task('sass', function(){
    return gulp.src(stylesFolder)
    .pipe(sass({
        outputStyle:'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./docs/css'))
    .pipe(browserSync.stream());
});

gulp.task('useref', function(){
    return gulp.src(pagesFolder)
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulp.dest('./docs'));
});

gulp.task('server', function(){
    browserSync.init({
        server:{
            baseDir:"docs"
        }
    });
    gulp.watch(stylesFolder,['sass']);
    gulp.watch('./src/*.html' );
});