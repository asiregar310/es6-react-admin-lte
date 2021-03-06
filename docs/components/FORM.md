# Form Components
> ./src/js/components/form/

## Purpose
To display of forms items that are dynamically or statically generated.


## Important Items

- form.jsx
- pieces/date-picker.jsx
- pieces/select.jsx
- pieces/search-bar.jsx


---
---


### Form - _form.jsx_

### Purpose
The container of form items. If you want to put form fields and buttons and stuff in a form, they would be placed or be generated in this component.


### Props
__loading__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Displays a loading spinner overlay if true, else the form fields appear_
* Default - _false_

__id__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The id of the form element for reference_

__fields__

* Required - _false_
* Data Type - _ARRAY_
* Functionality - _Sends the form field data to format and display in the form. If you don't use your own children as form fields, this is a neat way to go about it!_
* Expected Data -

        [{
          type: ('textarea', 'dropdown', 'date', 'checkbox', 'certain-radio', 'uncertain-radio', '', 'number', or other <input> type attrs),
          id: 'naming-format-uses-dashes',
          name: 'Label Text',
          placeholder: '',
          min: #,
          max: #,
          required: (true / false),
          disabled: (true / false),
          validate: 'The type of javascript object you want the item to be validated as: string, number, object, bool, etc.',
          confirms: 'field id that needs to have the same value'
        }]


__data__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _Data you want to pre-populate the form with. Make sure the data object's key matches a child field's id or the one of the field prop item's ids (underscores ' _ ' will be considered as dashes, as too will dashes)_
* Expected Data -

        { field_id: 'value' }


__hideMainButton__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _If true, the form component's built-in submit button is hidden. If false, it displays. The point of this is to allow the user to use their own button types if desired but also to have one by default for laziness's sake._
* Default - _false_

__moreButtons__

* Required - _false_
* Data Type - _ARRAY || ELEMENT_
* Functionality - _If you want to add more buttons than the built-in submit button or replace it. These buttons are rendered before the default submission button in the UI. The prop attribute accepts an element or an array of elements._

__clickHandler__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A callback upon the click of the form's built-in submit button._
* Expected Data -

        function(submittedData, missingRequiredFields, missingConfirmedFields) {
          //  DO STUFF WITH THAT DATA.
        }


__submitIcon__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Font awesome icon class_

__submitHeader__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Text for the built-in submit button_

__submitTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Bootstrap style button theme class_

__Takes Children__

* Expected Type - _Elements, assumably form fields_
* Displays After - _Dynamically generated fields_
* Displays Before - _Default form buttons and moreButtons prop_


### Example
```
import Form from './src/js/components/form/form.jsx';

const formFields = [
  {
    id: 'name',
    name: 'Name',
    type: 'text',
    required: true,
    validate: 'string'
  },
  {
    id: 'id',
    name: 'Id',
    type: 'number',
    validate: 'number'
  }
];

<Form
  id="my-cool-form"
  data={formFields}
  submitIcon="fa-check"
  submitTheme="btn-success"
  submitHeader="CLICK ME!"
  clickHandler={(data, reqErrs, confirmErrs) => {
    alert("Instead of submit the form data with an API call, I want to pop up an alert instead! Weee~");
  }}
  moreButtons={
    <button>This Does Nothing</button>
  }
>
  <input
    id="field"
    name="field"
    type="text"
    placeholder="This is just an example of how to add extra fields"
  />
<Form/>
```

---

### DatePicker - _pieces/date-picker.jsx_

### Purpose
To select a date item from a popper-upper using the [bootstrap-datepicker](https://www.npmjs.com/package/bootstrap-datepicker) package.

### Props
__id__
* Required - _false_
* Data Type - _STRING_
* Functionality - _Gives the input field an id (with 'datepickerator-' prepended) and name_

__value__
* Required - _false_
* Data Type - _STRING_
* Functionality - _Takes a date string in "Month, Day, Year" format_

__onChange__
* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _If item is not disabled, this function is called to handle the changingness of the field. The function can receive an event object_

__required__
* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Sets form field as required_
* Default - _false_

__disabled__
* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Sets the form item as disabled. The datepicker will not pop up._
* Default - _false_

### Example
```
import Form from './src/js/components/form/form.jsx';
import DatePickerator from './src/js/components/form/pieces/date-picker.jsx';

<Form>
  <DatePickerator
    id="my-datepicker"
    value="January, 01, 1993"
    onChange={e => { console.log(`Today is ${e.currentTarget.value}!`); }}
    required
  />
</Form>
```

---

### Select - _pieces/select.jsx_

### Purpose
Allows selection from a select field filled with API data.

### Props
__id__
* Required - _false_
* Data Type - _STRING_
* Functionality - _Gives the input field an id and name_

__options__
* Required - _false_
* Data Type - _ARRAY_
* Functionality - _A list of options to display as options tags in the dropdown_
* Expects -
  ```
  //  NOTE: These can be altered by the displayProperty and valueProperty props.
  [{
    value: '',  // The default value of options
    display: ''  // The default field text of options
  }]
  ```

__emptyValue__
* Required - _false_
* Data Type - _STRING_
* Functionality - _Displays a default, unchosen, selection value in the select element._

__displayProperty__
* Required - _false_
* Data Type - _STRING_
* Functionality - _Which data key needs to be displayed in the select's option tags_

__valueProperty__
* Required - _false_
* Data Type - _STRING_
* Functionality - _Which data key is used for the option's value._

__onChange__
* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _If item is not disabled, this function is called to handle the changingness of the field. The function can receive an event object_

__value__
* Required - _false_
* Data Type - _NUMBER || STRING_
* Functionality - _Value to display as selected item in the select tag._

__error__
* Required - _false_
* Data Type - _OBEJCT_
* Functionality - _Shows an error message in the select tag._
* Expects -
  ```
  {
    code: 500,
    origin: 'Server',
    message: 'Complete failure. We are ashamed!'
  }
  ```

__required__
* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Sets form field as required_
* Default - _false_

__disabled__
* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Sets the form item as disabled. The dropdown won't open._
* Default - _false_

__loading__
* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Dislays a loading icon on the select field to show it is loading_
* Default - _false_

### Example
```
import Form from './src/js/components/form/form.jsx';
import Select from './src/js/components/form/pieces/dropdown.jsx';

<Form>
  <Select
    id="the-dropper"
    emptyValue="Pick a Thing"
    options={[
      { id: 1, show: 'this'},
      { id: 2, show: 'that'},
      { id: 3, show: 'the other thing'},
      { id: 4, show: 'and so on...'}
    ]}
    value={3}
    valueProperty="id"
    displayProperty="show"
  />
</Form>
```

---

### SearchBar - _pieces/search-bar.jsx_

### Purpose
A separate form component that handles accepting a query and sending it back to do something with.

### Props
__id__
* Required - _false_
* Data Type - _STRING_
* Functionality - _Gives the form item an id with '-form' appended to it; the search input an id and name with '-input' appended, and a submission button with 'btn' appended_
* Default - _'generic-search'_

__placeholder__
* Required - _false_
* Data Type - _STRING_
* Functionality - _A string that the search input field dispays as a placeholder for user-inputted text_
* Default - _'Search...'_

__searchHandler__
* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A callback when the search button is clicked. It receives the query string data_
* Expected Data -
  ```
  query => { //  Do something with a passed string }
  ```

__disabled__
* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Sets the item as disabled and so you are unable to modify field_
* Default - _false_

### Example
```
import SearchBar from './src/js/components/form/pieces/search-bar.jsx';

<SearchBar
  id="some-example-id"
  placeholder="Search for something"
  searchHandler={query => { // Call API or something }}
/>
```
