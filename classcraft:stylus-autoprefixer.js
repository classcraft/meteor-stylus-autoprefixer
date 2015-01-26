var fs = Npm.require('fs');
var stylus = Npm.require('stylus');
var autoprefixer = Npm.require('autoprefixer-stylus');
var path = Npm.require('path');
var Future = Npm.require('fibers/future');

Plugin.registerSourceHandler('build.styl', {archMatching: 'web'}, function (compileStep) {
    var future = new Future;

    stylus(compileStep.read().toString('utf8'))
        //settings
        .set('include css', true)
        .set('compress', false)
        .set('filename', compileStep.inputPath)

        //plugins
        .use(autoprefixer())

        //include needed to allow relative @imports in stylus files
        .include(path.dirname(compileStep._fullInputPath))
        .render(future.resolver());

    try {
        var css = future.wait();
    } catch (e) {
        compileStep.error({
            message: 'Stylus compiler error:' + e.message
        });
        return;
    }

    compileStep.addStylesheet({
        path: compileStep.inputPath + '.css',
        data: css
    });
});

//register import.styl files with the dependency watcher
Plugin.registerSourceHandler('styl', function () {
    //do nothing
});