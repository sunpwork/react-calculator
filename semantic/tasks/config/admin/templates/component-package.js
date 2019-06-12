
Package.describe({
  name    : 'semantic:ui-{components}',
  summary : 'Semantic UI - {Component}: Single components release',
  version : '{version}',
  git     : 'git://github.com/Semantic-Org/UI-{Component}.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    {files}
  ], 'client');
});
