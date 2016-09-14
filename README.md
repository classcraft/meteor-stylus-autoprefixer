# Custom built Stylus + Autoprefixer for Meteor
Watches for `*.styl` files, compiles only `*.build.styl` files to allow you to `@import` everything the way you want it. Passes compiled css through Autoprefixer on application build. NPM modules : `stylus(0.49.3)`, `autoprefixer-stylus(0.5.0)`.

# DEPRECATED
As of Meteor 1.4, you should use the Meteor's Stylus package (`meteor add stylus`), in conjunction with `juliancwirko:postcss` (`meteor add juliancwirko:postcss`), per the instructions found in the [Metoer Guide](https://guide.meteor.com/build-tool.html#postcss).

## Installation
`meteor add classcraft:stylus-autoprefixer`

##Credits
Based off of the fine work done by [wilddeer](https://github.com/wilddeer/meteor-stylus-autoprefixer).