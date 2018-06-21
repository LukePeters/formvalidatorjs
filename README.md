# Form Validator

A very basic form validation library for any website or JavaScript app.

## Option 1: ES6 Module

First, setup your HTML form:

```html
<form name="myForm" novalidate>

  <div class="input-wrap">
    <input type="text" name="myField" data-error-text="This field is required" required />
  </div>

</form>
```

Then, place ```validator.js``` inside your project and make sure the import below points to the correct file location:

```javascript
import checkForm from "validator";
```

Finally, use the ```checkForm()``` function like this, making sure to pass in the form object:

```javascript
const myForm = document.querySelector("form[name=myForm]");

myForm.addEventListener("submit", function() {

  if(checkForm(myForm)) {
    // If all required form fields are validated, continue processing form
  }

});
```

## Option 2: Standalone Library

First, place ```validator-standalone.js``` into your page:

```html
<script src="validator-standalone.js"></script>
```

Then, setup your HTML form:

```html
<form name="myForm" novalidate>

  <div class="input-wrap">
    <input type="text" name="myField" data-error-text="This field is required" required />
  </div>

</form>
```

Finally, use the ```validator.checkForm()``` function like this, making sure to pass in the form object:

```javascript
const myForm = document.querySelector("form[name=myForm]");

myForm.addEventListener("submit", function() {

  if(validator.checkForm(myForm)) {
    // If all required form fields are validated, continue processing form
  }

});
```

## Settings

You can create a settings object for custom classnames and data attribute name:

```javascript
const customSettings = {
  errored_input_classname: "custom-classname",
  error_text_classname: "custom-classname",
  error_text_data_attribute: "custom-data-attribute-name"
};
```

Then simply pass the custom settings object into the ```checkForm()``` or ```validator.checkForm()``` function as the second argument:

```javascript
checkForm(myForm, customSettings)
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

## Todo

- Test with a wide variety of input types and variations:
  - Radio buttons
  - Checkboxes
  - Min/max attributes
  - Disabled attribute
- Include minified versions for both variations (ES6 module and standalone library)
- Test cross-browser and cross-device
- Implement a main source file and build script that generates the final distribution files
- Implement automated tests