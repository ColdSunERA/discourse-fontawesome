//Use: [fa:iconname] ex [fa:circle]

function fontawesome(text) {
    // The expression we're looking for.
    var re = /\[fa:\s*([a-zA-Z0-9-\s]*)]/g;
    // Check to see if our regex is found.
    if (re.test(text)) {
        // Find potential arguments.
        var args = (text.replace(re, "$1")).split(" ");
        // Check our arguments.
        if (args.length > 0) {
            // Start adjusting.
            var adjusted = "<i class=\"fa ";
            for (var i = 0; i < args.length; i++) {
                // Cycle through arguments and add each one.
                adjusted = adjusted + "fa-" + args[i] + " ";
            }
            // Close our HTML.
            adjusted = (adjusted + "\"></i>").replace(" \"", "\"");
        }
        return adjusted;
    } else {
        return text;
    }
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
