const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const babel = require('gulp-babel');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const browserSync = require('browser-sync').create();

const paths = {
    html:'./src/*.html',
    styles:'./src/sass/**/*.scss',
    script:'./src/js/app.js',
    images:'./src/img/**/*.+(png|jpg|jpg|jpeg|gif|svg)',
    outputRoot:'./docs',
    outputStyles:'./docs/css',
    outputScript:'./docs/js',
    outputImages:'./docs/img'
};


gulp.task('sass', () => {
    return gulp.src(paths.styles)
    .pipe(sass({
        outputStyle:'compressed'
    }).on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest(paths.outputStyles))
    .pipe(browserSync.stream());
});


gulp.task('html', () => {
    return gulp.src(paths.html)
    .pipe(gulp.dest(paths.outputRoot))
    .pipe(browserSync.stream());
});

gulp.task('buildjs', () =>{
    return gulp.src(paths.script)
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.outputScript))
    .pipe(browserSync.stream())
});

gulp.task('images', () => {
    gulp.src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.outputImages))
        .pipe(browserSync.stream())
});

gulp.task('server', () => {
    browserSync.init({
        server:{
            baseDir:"docs"
        }
    });
    gulp.watch(paths.styles,['sass']);
    gulp.watch(paths.html,['html'] );
    gulp.watch(paths.script, ['buildjs']);
    gulp.watch(paths.outputImages).on("change", browserSync.reload);
});