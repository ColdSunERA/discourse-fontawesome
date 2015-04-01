(function() {
  Discourse.Dialect.inlineRegexp({
    start: '[fa:',
    matcher: /^\[fa:([a-z\-]+)\]/,
    emitter: function(contents) {
      var icon = contents[1];
      return ['i', {class: ['fa fa-' + icon]} ];
    }
  });
  Discourse.Markdown.whiteListTag('i', 'class', /fa-*/);
})();
