
// Initializing the count to start at 0 on page load
let count = 0;

// Local variable count is updated and sent to the HTML object with the ID "number". This function is called by an onClick event for the button
function buttonClicked(){
  count++;
  document.getElementById("number").innerHTML = count;
 }