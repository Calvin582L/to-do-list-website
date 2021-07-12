document.getElementById("AddButton").onclick = function(){
  var ul = document.getElementById("list");
  var item = document.getElementById("myText");
  if (item && item.value) {
    var li = document.createElement("li");
    li.setAttribute('id', item.value);
    li.appendChild(document.createTextNode(item.value));
    ul.appendChild(li);
  }
  else if (!(item && item.value)) {
    console.log("Error, can't add nothing. ");
  }
}

document.getElementById("RemoveButton").onclick = function(){
  try {
  var u1 = document.getElementById("list");
  var item = document.getElementById("myText");
  var removed_item = document.getElementById(item.value);
  u1.removeChild(removed_item);
  }
  catch(err) {
  console.log("Error, can't removed this. ");
  }
}