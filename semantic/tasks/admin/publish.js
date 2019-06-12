/*******************************
          Release All
*******************************/

/*
 This task update all SUI individual component repos with new versions of component

  * Commits changes from create component to GitHub and Tags

*/

var
  runSequence = require('run-sequence')
;

/* Release All */
module.exports = function(callback) {

  runSequence(
    'update distributions', // commit less/css versions to github
    'update component', // commit component to github
    callback
  );

};