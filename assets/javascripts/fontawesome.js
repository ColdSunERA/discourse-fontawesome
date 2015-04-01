(function() {
  Discourse.Dialect.inlineRegexp({
    start: '[fa:',
    matcher: /^\[fa:([a-z\-]+)\]/,
    emitter: function(contents) {
      var icon = contents[1];
      consoloe.log(icon);
      return ['i', {class: ['fa fa-' + icon]} ];
    }
  });
  Discourse.Markdown.whiteListTag('i', 'class', /fa fa-([a-z\-]+)/);
})();
