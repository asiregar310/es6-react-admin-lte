# UTILITIES
> ./src/js/components/utilities/

## Purpose
Common components to for utility purposes. For example, things like error messages!


## Important Items

- error-page.jsx
- error-message.jsx
- load-status.jsx
- progress-bar.jsx
- label.jsx


---
---


## ErrorMessage - _error-message.jsx_

### Purpose
Displays a Bootstrap error message in your view where-ever it is you want it placed.


### Props
__error__

* Required - _false_
* Data Type - _OBJECT_
* Functionality - _An object holding the important notes of an error_
* Expected Data -

        {
          origin: 'How error originated. An API url, a personalized message; it\'s your call!',
          code: 'Error code',
          message: 'Text message to explain error'
        }


__theme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A Bootstrap theme class to display the message as_
* Default - _'alert-danger'_


### Example
```
import ErrorMessage from './src/js/components/utilities/error-message.jsx';

<ErrorMessage
  error={{
    origin: 'http://database.dev/api/v2/route?id=42',
    code: '422',
    message: 'You are not authorized to view this data.'
  }}
  theme="alert-warning"
/>
```


---


## LoadStatus - _load-status.jsx_

### Purpose
Displays a loading spinner icon in the view.


### Props
__message__

* Required - _false_
* Data Type - _STRING_
* Functionality - _Message to display with loader_
* Default - _''_

__icon__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A font-awesome icon that is displayed in the component_
* Default - _'fa-refresh_

__spins__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Allows the icon to spin in the view_
* Default - _false_

__size__

* Required - _false_
* Data Type - _STRING || NUMBER_
* Functionality - _The font size of the spinner. if it is a number, it displays it in pixel(px) units_
* Default - _'1em'_

__color__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A color string for the text and icon. Accepts hex, rgb, & rgba formats_
* Default - _'#000000'_


### Example
```
import ErrorMessage from './src/js/components/utilities/load-status.jsx';

<LoadStatus
  icon="fa-circle-o-notch"
  message="Loading"
  spins
/>
```


---


### ErrorPage - _error-page.jsx_

### Purpose
Displays a page formatted to display an error. Think of those 404 error pages that many-a-site have. That is the idea.


### Props
__theme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A Bootstrap text color class to display icons and the main headline in. It is for that extra little accent of color in the mix._
* Default - _'text-red'_

__icon__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A Font Awesome icon class to display with the error description._
* Default - _'fa-warning'_

__headline__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The big colorful text that tells you what this page is about._
* Default - _''_

__description__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The smaller, more descriptive text that tells you what this page is all about._
* Default - _''_

__Takes Children__

* Expected Type - _STRING or ELEMENT_
* Displays Inside - _A `div` with an .error-content class._
* Displays After - _`<h3>` with the page description and icon._


### Example
```
import ErrorPage from './src/js/components/utilities/error-page.jsx';

  <ErrorPage
    theme="text-yellow"
    icon="fa-heartbeat"
    headline="404"
    description="Oh no! The page died over-night. Sorry about that..."
  >
    <p>Here is a secondary message to show you how sorry we are. Seriously! Sorry about this error. :-(</p>
  </ErrorPage>
```


---


## CalloutAlert - _callout-alert.jsx_

### Purpose
Displays a callout or alert styled message for the user to see. You can reference it as <Callout> or <Alert> if you want. Go for it!


### Props
__theme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A Bootstrap theme class to display the message as_
* Default - _'success'_

__icon__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A FontAwesome class to display with the message._
* Default - _''_

__header__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A header message for the component_
* Default - _''_

__content__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A more descriptive string of content to display in the component_
* Default - _''_

__callout__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Sets the component to all of the callout classes instead of an alert class._
* Default - _false_

__dismissible__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _If the component is an alert, allow it to be closed and have a close button._


### Example
```
import CalloutAlert from './src/js/components/utilities/callout-alert.jsx';

<CalloutAlert
  theme="callout-warning"
  header="Check this out!"
  content="This is text that I really want you to see!!!"
  callout
/>
```


---


### ProgressBar - _progress-bar.jsx_

### Purpose
Displaying a progress bar in various decorative tones.


### Props
__percent__

* Required - _false_
* Data Type - _NUMBER || STRING_
* Functionality - _Percentage number to show the progress bar displayed at._
* Default - _0_

__theme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A progress bar color class string_
* Default - _'progress-bar-yellow'_

__size__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A progress bar size class string_
* Expects - _'sm', 'xs', 'xxs', ''_
* Default - _''_

__striped__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Gives the progress bar a striped effect._
* Default - _false_

__vertical__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Sets the progress bar to display vertically instead of horizontally._
* Default - _false_

__active__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Animated the progress bar. It's really only noticable if striped is set to true._
* Default - _false_


### Example
```
import ProgressBar from './src/js/components/utilities/progress-bar.jsx';

<ProgressBar
  percent={50}
  size="xs"
  theme="progress-bar-warning"
  striped
  active
/>
```


---


## Label - _label.jsx_

### Purpose
Display a cute little label within and next to components. Good for showing numbers, words, icons, etc. within a tiny colorful inline container.


### Props
__theme__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A class string to display the label in a color. You can use the 'bg-'-color format, or the 'label-'-bootstrap-color formats._
* Default - _'label-primary'_

__icon__

* Required - _false_
* Data Type - _STRING_
* Functionality - _A font-awesome icon that is displayed in the component_
* Default - _'fa-refresh_

__align__

* Required - _false_
* Data Type - _STRING_
* Functionality - _The alignment of where to pull the label. Can go 'left' or 'right'_
* Default - _'right'_

__stat__

* Required - _false_
* Data Type - _STRING || NUMBER_
* Functionality - _A string or a number to display in the component._
* Default - _''_


### Example
```
import ErrorMessage from './src/js/components/utilities/label.jsx';

<Label stat="New" theme="label-warning" />
```
