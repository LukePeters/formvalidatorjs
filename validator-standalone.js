(function(window) {
  function validator() {

    var _validator = {},
        settings = {
          errored_input_classname: "errored",
          error_text_classname: "input-error",
          error_text_data_attribute: "data-error-text"
        };

    _validator.checkForm = function(form, settings_override) {
      
      if(settings_override) {
        settings = Object.assign(settings, settings_override);
      }
      
      this.resetForm(form);

      var errorsFound = false,
          requiredInputs = form.querySelectorAll("input[required], textarea[required], select[required]"),
          re = email_regex = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

      for (var i = 0; i < requiredInputs.length; i++) {

        var input = requiredInputs[i],
          val = input.value;

        if (!val) {
          this.createError(input);
          errorsFound = true;
        } else if (input.type === "email" && re.test(val) === false) {
          this.createError(input);
          errorsFound = true;
        }
      }

      if (errorsFound) {
        return false;
      }

      return true;
    };

    _validator.createError = function(input) {
      var errorMessage = input.getAttribute(settings.error_text_data_attribute),
          errorMessageNode = document.createElement("span");

      input.classList.add(settings.errored_input_classname);
      errorMessageNode.classList.add(settings.error_text_classname);
      errorMessageNode.innerText = errorMessage;

      // Insert error message directly after the input element
      input.parentNode.insertBefore(errorMessageNode, input.nextSibling);
    };

    _validator.resetForm = function(form) {
      var erroredInputs = form.querySelectorAll("." + settings.errored_input_classname),
          errorMessageNodes = form.querySelectorAll("." + settings.error_text_classname);

      for (var j = 0; j < erroredInputs.length; j++) {
        var input = erroredInputs[j];
        input.classList.remove(settings.errored_input_classname);
      }

      for (var k = 0; k < errorMessageNodes.length; k++) {
        var errorMessageNode = errorMessageNodes[k];
        errorMessageNode.parentNode.removeChild(errorMessageNode);
      }

    };

    return _validator;
  }

  if (typeof (window.validator) === 'undefined') {
    window.validator = validator();
  }

})(window);
