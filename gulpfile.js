var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify");
var htmlmin = require("gulp-htmlmin")

gulp.task('sass', function(){
	return gulp.src('source/sass/*.scss')
	     .pipe(sass({outputStyle:'compressed'}))
	     .on('error', notify.onError({ title: 'Erro ao Compilar', massage: '<%= error.message %>'}))
	     .pipe(gulp.dest('dist/css'))
});

gulp.task('buildjs', function(){ 
	return gulp.src([
	'source/js/lib/*.js'
		])
	.pipe(gulp.dest('dist/js/lib/'))
});

gulp.task('js', function(){
	return	gulp.src('source/js/*.js').pipe(gulp.dest('dist/js/'))
});

gulp.task('js-controller', function(){
	return	gulp.src('source/js/controller/*.js').pipe(gulp.dest('dist/js/controller/'))
});

gulp.task('js-services', function(){
	return	gulp.src('source/js/services/*.js').pipe(gulp.dest('dist/js/services/'))
});

gulp.task('minify', function() {
  return gulp.src('source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('demolidor', function(){
	gulp.watch('source/sass/**/*.scss',['sass'])
	gulp.watch('source/js/*.js',['js'])
	gulp.watch('source/js/controller/*.js',['js-controller'])
	gulp.watch('source/js/services/*.js',['js-services'])
	gulp.watch('source/*.html',['minify'])
});

gulp.task('default',['buildjs','sass','js','minify','js-controller', 'js-services','demolidor']);