/*******************************
          Release
*******************************/

/*
 This task update all SUI individual component repos with new versions of component

  * Initializes repositories with current versions
  * Creates local files at ../distributions/ with each repo for release

*/

var
  runSequence = require('run-sequence')
;

/* Release All */
module.exports = function(callback) {

  runSequence(
    //'build', // build Semantic
    'init distributions', // sync with current github version
    'create distributions', // update each repo with changes from master repo
    'init component', // sync with current github version
    'create component', // update each repo
    callback
  );

};