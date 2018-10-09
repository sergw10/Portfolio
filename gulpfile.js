var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    rigger = require('gulp-rigger'),
    autoprefixer = require('gulp-autoprefixer');
/*-------------------------------------------*/

gulp.task('scss', function(){ // Создаем таск scss
  return gulp.src('app/scss/**/*.scss') // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-scss
    .on('error', swallowError)
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
    .pipe(gulp.dest('app/css')) // Выгружаем результат в папку app/css
    .pipe(cssnano({zindex: false})) // Сжимаем
    .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
    .pipe(gulp.dest('app/css')) // Выгружаем в папку app/css
    .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

/* --------------------- */

gulp.task('browser-sync', function() { // Создаем таск browser-sync
  browserSync({ // Выполняем browserSync
    server: { // Определяем параметры сервера
      baseDir: 'app' // Директория для сервера - app
    },
    notify: false // Отключаем уведомления
  });
});

/* --------------------- */

gulp.task('scripts', function(){
  return gulp.src([ // Берем все необходимые библиотеки, если их больше одной, используем []
    'app/libs/jquery.min.js',
    'app/libs/jquery.mCustomScrollbar.concat.min.js'
  ])
  .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
  .pipe(uglify()) // Сжимаем JS файл
  .on('error', swallowError)
  .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});

/* --------------------- */

gulp.task('default', ['browser-sync', 'scss', 'scripts'], function() {

  gulp.watch('app/**/*.scss', ['scss']); // Наблюдение за scss файлами в папке scss
  gulp.watch('app/**/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
  gulp.watch('app/js/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

/* --------------------- */

function swallowError (error) { // Dont stop when error

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}

/* --------------------- */
