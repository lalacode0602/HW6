//Complete code for the following function
//Display text for 400 level courses
const displayText400 = () => {
  lev400 = document.getElementsByClassName("400level");
  for (let i = 0; i < lev400.length; i++){
  console.log(lev400[i].textContent);}
}

displayText400();
