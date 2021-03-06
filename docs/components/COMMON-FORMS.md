# Common Forms
> ./src/js/components/form/common/

## Purpose
A set of prebuilt forms that are commonly used. It takes a little of the work out of having the make forms over and over again with the Form component or manually with AdminLTE-or-Bootstrap's setups.


## Important Items

- login-form.jsx

---
---

### LoginForm - _login-form.jsx_

### Purpose
Displays a login form with a username/email, password, and 'remember me'-checkbox inputs.


### Props
__loading__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _A boolean that displays a loading overlay over the form._
* Default - _false_

__error__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _An object that uses 'origin', 'code', and 'message' properties to display an error on the form. Shows if at-least the message property is not null._
* Default -

        {
          code: null,
          origin: null,
          message: null
        }


__errorTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The theme color of the error container in this component._
* Default - _'alert-danger'_

__clientName__

* Required - _false_
* Data Type - _STRING || ELEMENT_
* Functionality - _Displays a text or element version of the client's name_
* Default - _`<span><b>Admin</b>LTE</span>`_

__clientLogo__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A URL to a client image logo to display_
* Default - _''_

__logoLink__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A URL string that is opened when clicking on the logo_

__onLogoClick__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _What action is called upon clicking the logo link_

__headline__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A headline to display on the form._
* Default - _'Sign in to start your session'_

__subheadline__

* Required - _false_
* Data Type - _STRING._
* Functionality - _A subheadline to display on the form to accentuate the headline prop contents_
* Default - _''_

__onSubmit__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function that receives form data and does something with it. What is does is your call._
* Expected Data -

        (username, password, remember) => {
          /*
            username is a string
            password is a string
            remember is a boolean
          */
        }

* Default - _() => {}_

__rememberMeText__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Text to display by the form's checkbox_
* Default - _'Remember Me'_

__submitText__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Text to display on the form submission button._
* Default - _Sign In_

__submitTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Theme class of the submit button._
* Default - _'btn-primary'_

__namePlaceholder__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Placeholder text for the username field_
* Default - _Email_

__passPlaceholder__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Placeholder text for the password field_
* Default - _N/A_

__forgets__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Displays a 'forgot password' style link at the bottom of the form_
* Default - _false_

__registers__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Displays a 'sign up' style link at the bottom of the form_
* Default - _false_

__forgetLink__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A URL to route to upon pressing the 'forgot password' style link_
* Default - _'#_

__registerLink__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A URL to route to upon pressing the 'sign up' style link_
* Default - _'#_

__onForget__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A functional action to take upon clicking the 'forgot password' style link; replaces the link's href functionality_

__onRegister__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A functional action to take upon clicking the 'sign up' style link; replaces the link's href functionality_

__Takes Children__

* Expected Type - _STRING || ELEMENTS_
* Displays Inside - _<div class="row">_
* Displays After - _The rest of the content in the component_
* Displays Before - _The loading status, which displays above all form items._


### Example
```
import LoginForm from './src/js/components/form/common/login-form.jsx';

<LoginForm
  headline="This is your golden opportunity"
  subheadline="You can finally log in to our application!"
  submitText="GO!!!"
  onSubmit={(sn, pass, remember) => {
    alert(`
      SUBMITS:
      -  screenname:  ${sn}
      -    password:  ${pass}
      -    remember:  ${remember}
    `);
  }}
  namePlaceholder="Submit a username yo!"
  passPlaceholder="Submit a pass yo!"
  remembers
  registers
  forgets
  onRegister={() => { alert('Clicked register link'); }}
  onForget={() => { alert('Clicked forget link'); }}
/>
```


---



### RegisterForm - _register-form.jsx_

### Purpose
Displays a registration form with some basic, generally expected items to use in the form, and the option to ad personalized ones after.


### Props
__loading__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _A boolean that displays a loading overlay over the form._
* Default - _false_

__error__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _An object that uses 'origin', 'code', and 'message' properties to display an error on the form. Shows if at-least the message property is not null._
* Default -

        {
          code: null,
          origin: null,
          message: null
        }


__errorTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The theme color of the error container in this component._
* Default - _'alert-danger'_

__clientName__

* Required - _false_
* Data Type - _STRING || ELEMENT_
* Functionality - _Displays a text or element version of the client's name_
* Default - _`<span><b>Admin</b>LTE</span>`_

__clientLogo__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A URL to a client image logo to display_
* Default - _''_

__logoLink__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A URL string that is opened when clicking on the logo_

__onLogoClick__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _What action is called upon clicking the logo link_

__headline__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A headline to display on the form._
* Default - _'Register a new membership'_

__subheadline__

* Required - _false_
* Data Type - _STRING._
* Functionality - _A subheadline to display on the form to accentuate the headline prop contents_
* Default - _''_

__onSubmit__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function that receives form data and does something with it. What is does is your call._
* Expected Data -

        (formData) => {
          /*
            name is a string
            username is a string
            password is a string
            agreement is a boolean
          */
        }

* Default - _() => {}_

__submitText__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Text to display on the form submission button._
* Default - _Register_

__submitTheme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Theme class of the submit button._
* Default - _'btn-primary'_

__registered__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Show a link that takes a user to the sign-in page or something that an already-registered user would want to do._
* Default - _false_

__registeredText__

* Required - _false_
* Data Type - _STRING_
* Functionality - _What you want the 'I already registered' text to say_
* Default - _'I already have a membership'_

__registeredLink__

* Required - _false_
* Data Type - _STRING_
* Functionality - _URL for the 'I already registered' link._

__onRegisterd__

* Required - _false_
* Data Type - _FUNCTION_
* Functionality - _A function launched when user clicks a link, assuming no URL is attached, that indicated the user is already registered with the application._
* Expected Data -

        () => { /* Do Something */ }

* Default - _() => {}_

__hideNameField__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Hides the name field_
* Default - _false_

__namePlaceholder__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Placeholder text for the name field_
* Default - _'Full Name'_

__usernamePlaceholder__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Placeholder text for the username field_
* Default - _'Username or Email'_

__passPlaceholder__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Placeholder text for the password field_
* Default - _'Password'_

__confirmPassPlaceholder__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Placeholder text for the password confirmation field_
* Default - _'Confirm Password'_

__hasConfirmPass__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Displays the confirm password field_
* Default - _false_

__hasNoAgreement__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Hides the user agreement checkbox area_
* Default - _false_

__agreementText__

* Required - _false_
* Data Type - _STRING || ELEMENT_
* Functionality - _Text or content to place in as user agreement link, text, etc._
* Default - _'I agree to the terms and policies'_

__social__

* Required - _false_
* Data Type - _ARRAY (of elements)_
* Functionality - _An array of elements to display as links to social media login forms or some other thing._
* Default - _[]_

__Takes Children__

* Expected Type - _STRING || ELEMENTS_
* Displays After - _The rest of the form content that is there by default_
* Displays Before - _The submission button_


### Example
```
import RegisterForm from './src/js/components/form/common/register-form.jsx';

<RegisterForm
  headline="This is your golden opportunity"
  subheadline="You can finally sign up for our application!"
  submitText="GO!!!"
  onSubmit={(formData) => {
    alert(`
      SUBMITS:
      -        name:  ${formData.name}
      -  screenname:  ${formData.username}
      -    password:  ${formData.password}
      -  aggreement:  ${formData.aggreement}
    `);
  }}
  namePlaceholder="Submit a full name yo!"
  usernamePlaceholder="Submit a username yo!"
  passPlaceholder="Submit a pass yo!"
/>
```

---
