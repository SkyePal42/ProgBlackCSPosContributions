//Modified from: https://pagedart.com/blog/how-to-add-a-search-bar-in-html/
const f = document.getElementById('science-search');
const q = document.getElementById('query');

function submitted(event, q) {
  event.preventDefault();
  if (q == /[Pp]hysic?/) {
    return physics
  }
}

f.addEventListener('submit', submitted);





  
/*IF INPUT == "Chemistry" THEN
  return chemistry
IF INPUT == "Biology" THEN
  return biology
# Use Regex about for case insensitivity in first letter
IF INPUT == "Biology" THEN
  return biology
# Semi joke entry for CS: "It has been widely accepted that computers have had no impact or effects on computer science. ;-)"
# Below code modified from W3Schools
try {
    if(x == "") throw "That's blank.";
    if(x == REGEX(*[0-9]*)) throw "Please don't include numbers.";
  }
  catch(err) {
    message.innerHTML = err;
  }*/