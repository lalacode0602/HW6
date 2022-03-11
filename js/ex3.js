//3.	Create and run a function to change all paragraph elements to bold with a yellow background
const yellowParagraph = () => {
  const paragrapghs = document.getElementsByTagName("p");
  for (let i = 0; i < paragrapghs.length; i++){
    paragrapghs[i].style.backgroundColor = "yellow";
    paragrapghs[i].style.fontWeight = "bold";
  }
}

yellowParagraph()