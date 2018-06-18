var settings = {
  errored_input_classname: "errored",
  error_text_classname: "input-error",
  error_text_data_attribute: "data-error-text"
};

export default function checkForm(form, settings_override) {

  if(settings_override) {
    settings = Object.assign(settings, settings_override);
  }
  
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
  var errorMessage = input.getAttribute(settings.error_text_data_attribute),
      errorMessageNode = document.createElement("span");

  input.classList.add(settings.errored_input_classname);
  errorMessageNode.classList.add(settings.error_text_classname);
  errorMessageNode.innerText = errorMessage;

  input.parentNode.insertBefore(errorMessageNode, input.nextSibling);
}

export function resetForm(form) {
  var erroredInputs = form.querySelectorAll("." + settings.errored_input_classname),
      errorMessageNodes = form.querySelectorAll("." + settings.error_text_classname);

  for(var j=0; j < erroredInputs.length; j++) {
      var input = erroredInputs[j];
      input.classList.remove(settings.errored_input_classname);
  }
  
  for(var k=0; k < errorMessageNodes.length; k++) {
      var errorMessageNode = errorMessageNodes[k];
      errorMessageNode.parentNode.removeChild(errorMessageNode);
  }

}