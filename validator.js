// To be expanded upon, but it's a good start.
// Example field: <input type="email" name="email" id="field_email" class="field full" required data-error-message="Please enter a valid email address">

// Use it in JavaScript like this (Vue.js, React.js, AngularJS, it doesn't matter):
// import checkForm from "validator";
// if(checkForm(event.target)) {
//     myFormActionFunction();
// }

export default function checkForm(form) {
  resetForm(form);
  
  var errorsFound = false,
      requiredInputs = form.querySelectorAll("input[required], textarea[required], select[required]"),
      re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

for(var i=0; i < requiredInputs.length; i++) {

      var input = requiredInputs[i],
          val = input.value;

  if(!val) {
    createError(input);
    errorsFound = true;
  } else if(input.type === "email" && re.test(val) === false) {
    createError(input);
    errorsFound = true;
  }
}
  
  if(errorsFound) {
      return false;
  }

  return true;
}

export function createError(input) {
  var errorMessage = input.getAttribute("data-error-message"),
      errorMessageNode = document.createElement("span"),
      inputLabel = input.nextSibling.nextSibling;

  input.classList.add("input-field--has-error");
  errorMessageNode.classList.add("input-error");
  errorMessageNode.innerText = errorMessage;

  // Insert error message directly after the input element
  input.parentNode.insertBefore(errorMessageNode, input.nextSibling);
}

export function resetForm(form) {
  var erroredInputs = form.querySelectorAll(".input-field--has-error"),
      errorMessageNodes = form.querySelectorAll(".input-error");

  for(var j=0; j < erroredInputs.length; j++) {
      var input = erroredInputs[j];
      input.classList.remove("input-field--has-error");
  }
  
  for(var k=0; k < errorMessageNodes.length; k++) {
      var errorMessageNode = errorMessageNodes[k];
      errorMessageNode.parentNode.removeChild(errorMessageNode);
  }

}