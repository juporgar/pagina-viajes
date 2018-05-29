let gulp = require('gulp'),
browserSync = require('browser-sync'),
uglify =require('gulp-uglify'),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
minify = require('gulp-clean-css');


gulp.task('scripts',()=>{
    return gulp.src('public/javascripts/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('public/dist/script'))
    .pipe(rename('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/script'));
});

gulp.task('css',()=>{
    return gulp.src('public/stylesheets/*.css')
    .pipe(concat('app.css'))
    .pipe(gulp.dest('public/dist/css'))
    .pipe(rename('css.min.css'))
    .pipe(minify())
    .pipe(gulp.dest('public/dist/css'))
})

gulp.task('default',['browser','scripts','css']);


gulp.task('browser',()=>{
    browserSync.init({
        server:{
            baseDir: "./"
        }
    });
});


 gulp.watch('.js/javascript/*.js').on('change',()=>{    
     return gulp.src('public/javascript/*.js')
     .pipe(concat('script.js'))
     .pipe(gulp.dest('dist/script'))
     .pipe(rename('script.min.js'))
     .pipe(uglify())
     .pipe(gulp.dest('dist/script'));
 });

 gulp.watch('./public/stylesheets/**/*.css').on('change',()=>{    
     return gulp.src('public/stylesheets/**/*.css')
     .pipe(concat('app.css'))
     .pipe(gulp.dest('public/dist/css'))
     .pipe(rename('css.min.css'))
     .pipe(minify())
     .pipe(gulp.dest('public/dist/css'))
 });

gulp.watch(['index.html','./public/javascripts/app.js','./public/stylesheets/style.css']).on('change',()=>{
    browserSync.reload();
})