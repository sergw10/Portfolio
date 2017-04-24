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



/* --------------------- */

gulp.task('sass', function(){ // Создаем таск Sass
  return gulp.src('app/sass/**/*.scss') // Берем источник
    .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
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
    'app/libs/jquery.min.js'
  ])
  .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
  .pipe(uglify()) // Сжимаем JS файл
  .pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});

/* --------------------- */

gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function() {

  gulp.watch('app/sass/**/*.scss', ['sass']); // Наблюдение за sass файлами в папке sass
  gulp.watch('app/**/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
  gulp.watch('app/js/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

/* --------------------- */