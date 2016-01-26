"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); 
var open = require('gulp-open'); 
var browserify = require('browserify'); 
var reactify = require('reactify'); 
var source = require('vinyl-source-stream'); 
var concat = require('gulp-concat'); 
var lint = require('gulp-eslint');

var config = {
	port: 9000,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './web/src/*.html',
		js: './web/src/**/*.js',
		images: './web/src/images/*',
		css: [
      		'node_modules/bootstrap/dist/css/bootstrap.min.css',
      		'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    	],
    	myCss : './web/src/components/common/*.css',
		dist: './web/public',
		mainJs: './web/src/main.js'
	}
};

gulp.task('connect', function() {
	connect.server({
		root: ['web/public'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open', ['connect'], function() {
	gulp.src('web/public/index.html')
		.pipe(open('', { url: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js', function() {
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('style', function() {
	gulp.src(config.paths.myCss)
		.pipe(concat('style.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
		.pipe(connect.reload());;
});

gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

});

gulp.task('lint', function() {
	return gulp.src(config.paths.js)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
	gulp.watch(config.paths.myCss, ['style']);
});

gulp.task('default', ['html', 'js', 'css', 'style','images', 'lint', 'open', 'watch']);
