const gulp = require('gulp');
const {series} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('default', series(styles, scripts, sync, img, (done) => {
  gulp.watch('./assets/sass/**/*', series(styles));
  gulp.watch('./assets/js/**/*', series(scripts));
  gulp.watch(['./public/**/*', './public/*', '!public/js/**/.#*js', '!public/css/**/.#*css']).on('change', reload)
  gulp.watch('./assets/img/**/*', series(img));
  done();
}))

function img(){
  return gulp.src('./assets/img/**/*')
  .pipe(gulp.dest('./public/img/'))
   .pipe(browserSync.stream());
};

gulp.task(img);
gulp.task(scripts)
function scripts() {
 return gulp.src('./assets/js/**/*.js')
     .pipe(
       babel({
         presets: ['es2015']
     }))
     .pipe(gulp.dest('./public/js'))
     .pipe(browserSync.stream())
};

function styles() {
 return gulp.src('./assets/sass/**/*.scss')
   .pipe(
     sass({
       outputStyle: 'compressed'
     })
     .on('error', sass.logError))
     .pipe(autoprefixer({
       browsers: ["> 0%"]
   }))
   .pipe(gulp.dest('./public/css'))
   .pipe(browserSync.stream())
};

function sync(){
  return  browserSync.init({
        server: './public',
        notify: false,
        open: false //change this to true if you want the broser to open automatically
    });
};

//
// gulp.task('browser-sync', ['styles'], function () {
//   // THIS IS FOR SITUATIONS WHEN YOU HAVE ANOTHER SERVER RUNNING
//   // browserSync.init({
//   //   proxy: {
//   //     target: 'localhost:3000', // can be [virtual host, sub-directory, localhost with port]
//   //     ws: true // enables websockets
//   //   },
//   //   serveStatic: ['.', './public']
//   // })
//




// gulp.task('webpack', shell.task([
//   'webpack'
// ]))

// gulp.task('server', shell.task([
//   'yarn run server'
// ]))
