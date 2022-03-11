
//Complete the following functions
//Displays all nodes
const bodyNodes = () => {
  // console.log(document.body.innerHTML);
  for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
  }
};


bodyNodes();
