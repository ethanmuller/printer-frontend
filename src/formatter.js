export function formatter(string) {
  return limitLineLength(string, 32)
}

function limitLineLength(text, lineLength) {
  let lines = [];
  let currentLine = "";

  text.split(" ").forEach(word => {
    if (word.length > lineLength) {
      let parts = word.match(new RegExp(`.{1,${lineLength}}`, "g"));
      parts.forEach(part => {
        if (currentLine.length + part.length > lineLength) {
          lines.push(currentLine.trim());
          currentLine = "";
        }
        currentLine += part + " ";
      });
    } else {
      if (currentLine.length + word.length > lineLength) {
        lines.push(currentLine.trim());
        currentLine = "";
      }
      currentLine += word + " ";
    }
  });
  lines.push(currentLine.trim());
  return lines.join("\n");
}
