/*两种重启 pm2 node-dev 命令行的; */
var gulp = require('gulp')
,io = require('io-global')
,pm2 = require('pm2')

gulp.task('default',function(){
  gulp.watch('./cs/cs.coffee')
  .on('change',function(e){
    io.c(e)
  })
})
