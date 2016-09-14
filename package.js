Package.describe({
  name: 'classcraft:stylus-autoprefixer',
  version: '0.0.3',
  summary: 'Compile stylus files and postprocess them with Autoprefixer, during Meteor\'s build process.',
  git: 'https://github.com/classcraft/meteor-stylus-autoprefixer.git',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
    name: 'compileStylus',
    use: [],
    sources: [
        'classcraft:stylus-autoprefixer.js'
    ],
    npmDependencies: {
        'stylus': '0.49.3',
        'autoprefixer-stylus': '0.5.0'
    }
});