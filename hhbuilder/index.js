//empty arry to push new households
var householdArray = [];

//create household object and form reset
function householdPerson(age, relationship, smoker){
  var element = document.createElement("li");
  var person = age + ", " + relationship + ", ";
  person += (smoker) ? "smoker" : "non-smoker";
  element.appendChild(document.createTextNode(person));
  var data = document.getElementsByTagName("ol")[0];
  data.appendChild(element);
  var form = document.getElementsByTagName("form")[0];
  form.reset();
    return {
     age: age,
     relationship: relationship,
     smoker: smoker
   };
}

//add button that gets input from form and pushes it into the array
var addButton = document.getElementsByClassName("add")[0];
addButton.addEventListener("click", function(event){
  var age = document.getElementsByName("age")[0].value;
  var relationship = document.getElementsByName("rel")[0].value;
  var smoker = document.getElementsByName("smoker")[0].checked;
  householdArray.push(householdPerson(age, relationship, smoker));
  event.preventDefault();
});
