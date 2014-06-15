//Use: [fa:iconname] ex [fa:circle]

function fontawesome(text) {
  //Expression to find.
  var re = /\[fa:\s*([a-zA-Z0-9-\s]+)]/;
  // Adjust text.
  //\[fa:\s*([a-zA-Z0-9-]+)\s*([a-zA-Z0-9-]+)]
  var adjusted = text.replace(re, "<i class=\"fa fa-" + "$1" + "\"></i>");
  // Return.
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
  return text;
});
