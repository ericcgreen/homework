//empty array to push new households
var householdArray = [];
//global form variable
var form = document.getElementsByTagName("form")[0];

//create household person and delete button functionalities
function householdPerson(age, relationship, smoker){
  var element = document.createElement("li");
  var personAge = age;
  var personRelationship = relationship.charAt(0).toUpperCase() + relationship.slice(1);
  var isSmoker = (smoker) ? "Smoker " : "Non-smoker ";
  var personData = personAge + ", " + personRelationship + ", " + isSmoker + " ";
  element.appendChild(document.createTextNode(personData));
  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete");
  deleteButton.appendChild(document.createTextNode("delete"));
  deleteButton.onclick = function(){
    this.parentElement.style.display = "none";
  };
  element.appendChild(deleteButton);
  var data = document.getElementsByTagName("ol")[0];
  data.appendChild(element);
  form.reset();
  return {
    age: personAge,
    relationship: personRelationship,
    smoker: isSmoker
  };
}

function validate(age, relationship){
  if(age && relationship){
    if(age < 0 || isNaN(age) === true){
      alert("Please enter a valid age");
    }else{
      return true;
    }
  }else{
    alert("Please complete the form");
  }
  form.reset();
}

//add button that gets input from form and pushes it into the array
var addButton = document.getElementsByClassName("add")[0];
addButton.addEventListener("click", function(event){
  event.preventDefault();
  var age = document.getElementsByName("age")[0].value;
  var relationship = document.getElementsByName("rel")[0].value;
  var smoker = document.getElementsByName("smoker")[0].checked;
  if(validate(age, relationship)) {
  householdArray.push(householdPerson(age, relationship, smoker));
  }
});

//submit button
document.addEventListener("submit", function(event){
  event.preventDefault();
  if(householdArray.length > 0){
    var displayList = document.getElementsByClassName("debug")[0];
    var stringified = JSON.stringify;
    displayList.appendChild(document.createTextNode(stringified(householdArray)));
    var editButton = document.createElement("button");
    editButton.setAttribute("class", "edit");
    editButton.appendChild(document.createTextNode("edit"));
    var inputField = document.createElement("input");
    inputField.setAttribute("type", "text");
    var editSubmit = document.createElement("input");
    editSubmit.setAttribute("type", "submit");
    editSubmit.onclick = function(age){
      this.age.toString().push();
    }
    editButton.onclick = function editAge(age, newAge){
      displayList.appendChild(inputField);
      displayList.appendChild(editSubmit);
      for (var i = 0; i < householdArray.length; i++) {
        if (householdArray[i].age === age) {
            householdArray[i].age = newAge;
            return;
    }
  }
}
    displayList.appendChild(editButton);
    displayList.style.display = 'block';
    householdArray = [];
  }
});
