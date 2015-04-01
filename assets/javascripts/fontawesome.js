Discourse.Dialect.inlineRegexp({
  start: '[fa:',
  matcher: /^\[fa:([a-z\-]+)\]/
  emitter: function(match) {
    var icon = match[1];
    return ['i', {class: ['fa fa-' + icon]} ];
  }
  Discourse.Markdown.whiteListTag('i', 'class', /fa-*/);
});
