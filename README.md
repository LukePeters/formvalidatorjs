# Form Validator

A very basic form validation library for any website or JavaScript app.

## Option 1: ES6 Module

First, setup your HTML form:

```
<form name="myForm" novalidate>

  <div class="input-wrap">
    <input type="text" name="myField" data-error-text="This field is required" required />
  </div>

</form>
```

Then, place ```validator.js``` inside your project and make sure the import below points to the correct file location:

```
import checkForm from "validator";
```

Finally, use the ```checkForm()``` function like this, making sure to pass in the form object (via ```event.target```, in this case):

```
const myForm = document.querySelector("form[name=myForm]");

myForm.addEventListener("submit", function(event) {

  if(checkForm(event.target)) {
    // If all required form fields are validated, continue processing form
  }

});
```

## Option 2: Standalone Library

First, place ```validator-standalone.js``` into your page:

```
<script src="validator-standalone.js"></script>
```

Then, setup your HTML form:

```
<form name="myForm" novalidate>

  <div class="input-wrap">
    <input type="text" name="myField" data-error-text="This field is required" required />
  </div>

</form>
```

Finally, use the ```validator.checkForm()``` function like this, making sure to pass in the form object (via ```event.target```, in this case):

```
const myForm = document.querySelector("form[name=myForm]");

myForm.addEventListener("submit", function(event) {

  if(validator.checkForm(event.target)) {
    // If all required form fields are validated, continue processing form
  }

});
```

## Settings

You can create a settings object for custom classnames and data attribute name:

```
const customSettings = {
  errored_input_classname: "custom-classname",
  error_text_classname: "custom-classname",
  error_text_data_attribute: "custom-data-attribute-name"
};
```

Then simply pass the custom settings object into the ```checkForm()``` or ```validator.checkForm()``` function (as the second argument):

```
checkForm(formToValidate, customSettings)
```

## Styling

The CSS is totally up to you. Style up the classes for errored inputs and error messages any way you like.

By default, errored inputs will receive a class of ```.errored```, and appended error messages have a class of ```.input-error```.

## How it works

- It loops through the form's required inputs
- It checks if each input has a valid value
- If the value is empty or invalid:
  - It adds a class of ```.errored``` to the input
  - It appends a ```<span class="input-error">...</span>``` tag directly after the input field, which contains the configured error message text (which is optional)

## Visual Examples

<img src="https://i.imgur.com/eSoy5iy.png" title="Screenshot 1" width="1000" />
<img src="https://i.imgur.com/IjRhym6.png" title="Screenshot 2" width="500" />

## Questions?

Feel free to reach out on Twitter: [@MoonlightLuke](https://twitter.com/MoonlightLuke)

## Disclaimer

**Yes**, I know this is an incredibly basic library. But I've used it myself in several projects now, so why not open source it? At the very least, it'll be easier for me to grab for each new project. But I do also plan on continually improving it over time.