//Use: [fa:iconname] ex [fa:circle]

function fontawesome(text) {
  //Expression to find.
  var re = /\[fa:([a-zA-Z0-9]+)]/;
  // Adjust text.
  var adjusted = text.replace(re, "<i class=\"fa fa-" + "$1" + "\"></i>");
  return adjusted;
}

Discourse.Dialect.postProcessText(function (text) {
  text = [].concat(text);
  for (var i = 0; i < text.length; i++) {
    if (text[i].length > 0 && text[i][0] !== "<") {
      text[i] = fontawesome(text[i]);
    }
  }
  return text;
});
