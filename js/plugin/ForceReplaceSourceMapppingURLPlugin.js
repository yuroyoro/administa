function ForceReplaceSourceMapppingURLPlugin(patterns) {
  this.patterns = patterns;
}

module.exports = ForceReplaceSourceMapppingURLPlugin;
ForceReplaceSourceMapppingURLPlugin.prototype.apply = function(compiler) {
  var patterns = this.patterns;
	compiler.plugin("compilation", function(compilation) {
		compilation.plugin("after-optimize-assets", function(assets) {
      patterns.forEach(function(pattern) {
        asset = assets[pattern.asset];
        if(asset) {
          var children = asset.children;
          var comment  = children.pop();
          children.push(
            comment.replace(/sourceMappingURL=(.+)/, 'sourceMappingURL=' + pattern.sourceMappingURL)
          );
        }
      });
    });
  });
};
