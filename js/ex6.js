const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

const minidic = () => {
  document.getElementById("content").innerHTML += "<dl></dl>"
  str = "";
  for (i = 0; i < words.length; i++){
    str += "<dt>", words.term[i], "</dt><dd>", words.definition[i],"</dd>" ;
  }
  document.getElementById("content").getElementsByTagName("dl").innerHTML += str;
}

minidic();