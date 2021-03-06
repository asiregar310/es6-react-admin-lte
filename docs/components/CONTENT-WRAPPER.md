# The ContentWrapper
> ./src/js/components/content-wrapper/

## Purpose
This component holds changing 'page content' of the admin panel.

## Important Items

- content-wrapper.jsx


## Props
__heading__


* Required - _false_
* Data Type - _STRING || ELEMENT_
* Functionality - _Displays a page title heading_
* Default - _''_

__subheading__

* Required - _false_
* Data Type - _STRING || ELEMENT_
* Functionality - _Displays a page title subheading_

__breadcrumbs__

* Required - _false_
* Data Type - _BOOLEAN_
* Functionality - _Displays a Breadcrumbs component_
* Default - _false_

__Takes Children__

* Expected Type - _ELEMENTS && STRING_
* Displays Inside - _A <section> classed .content/body_


## Example
```
import ContentWrapper from './src/js/components/content-wrapper/content-wrapper.jsx';

<ContentWrapper
  heading="Cool Cats"
  subheading={(
    <span>
      A list of really cool cats&nbsp;
      <i className="fa fa-meh-o" />
    </span>
  )}
>
  <ol>
    <li>Swat Cats</li>
    <li>Thunder Cats</li>
    <li>Heathcliff</li>
    <li>Garfield</li>
  </ol>
</ContentWrapper>
```

---
