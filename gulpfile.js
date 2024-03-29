var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function() {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("build"));
});

gulp.task("watch", function() {
  gulp.watch("src/*.ts", gulp.series("default"));
});
