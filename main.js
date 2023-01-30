
// initializing the count to start at 0 on page load
count = 0;

// function where the local variable count is updated and sent to the HTML object with the ID "number". This function is called by an onClick event for the button
function addClick(){
  count++;
  document.getElementById("number").innerHTML = count;
 }