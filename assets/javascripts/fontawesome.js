//Use: [fa:iconname] ex [fa:circle]

function fontawesome(text) {
  var re = /\[fa:\s*([a-zA-Z0-9-]+)\s*([a-zA-Z0-9-]*)]/;   
  var args = (srctext.replace(re, "$1")).split(" ");
    if (args.length > 0) {
        var adjusted = "<i class=\"fa ";
        for (var i = 0; i < args.length; i++) {
            adjusted = adjusted + "fa-" + args[i] + " ";
        }
        adjusted = (adjusted + "\"></i>").replace(" \"", "\"");;
    }
    adjusted = adjusted + "\"></i>");
  return adjusted;
}

Discourse.Dialect.postProcessText(function (text) {
  text = [].concat(text);
  // Cycle through all text.
  for (var i = 0; i < text.length; i++) {
    if (text[i].length > 0 && text[i][0] !== "<") {
      // Send our text to the processor.
      text[i] = fontawesome(text[i]);
    }
  }
  replaceBBCode('stack', function(contents) { return ['span', {'class': 'fa-stack'}].concat(contents); });
  return text;
});

/*
Discourse.Dialect.inlineBetween({
    start: '[stack]',
    stop: '[/stack]',
    rawContents: true,
    emitter: function (contents) {
        return '<span class' + contents + '\\]';
    }
});
*/
