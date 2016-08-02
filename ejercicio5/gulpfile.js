gulp.task('uglify', function() {
  gulp.src(['app.js', 'controllers.js'])
    .pipe(uglify('app.js', {
      mangle: false,
      output: {
        beautify: true
      }
    }))
    .pipe(gulp.dest('dist1/js'))
});