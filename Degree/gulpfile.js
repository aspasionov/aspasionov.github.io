const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

 function compile(){
	return gulp.src('./src/sass/main.sass')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./src/css/'))
	.pipe(browserSync.stream())
}

function styles(){
	return gulp.src('./src/css/main.css')
	.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
	.pipe(gulp.dest('./build/css/'))
	.pipe(browserSync.stream())
}

function watch(){
	browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/sass/**/*.sass', compile)
    gulp.watch('./src/css/main.css', styles)
    gulp.watch("./index.html").on('change', browserSync.reload)
}

gulp.task('sass', compile);
gulp.task('css', styles);
gulp.task('watch', watch);

// gulp.task('watch', function() {
// 	browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
//     gulp.watch('./build/css/main.css', sass)
//     gulp.watch('./build/js/main.js', scripts)
//     gulp.watch("./*.html").on('change', browserSync.reload)
// }

