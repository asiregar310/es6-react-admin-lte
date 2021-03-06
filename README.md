# AdmnLTE with ES6 & React
_**Current Version:** 2.0.0_

Welcome to yet another project using the [AdminLTE template](https://github.com/almasaeed2010/AdminLTE)! This version makes some of the template into a bunch of ReactJS components.


## Install it
_It is as easy as getting hooked up with any other NPM package!_
Just open your project in your favourite Node.js-fluent terminal and type:
```
  npm install es6-react-admin-lte
```

You are certainly welcome to add your preferred package installation parameters, like `--save`, of course; and then all that is left to do at this point is bask in the glory of npm's timeless install process!



## Using it in your project
> **NOTE:**
>
> For this first iteration of documentation, I'm going to be using ES6 syntax, and JSX formatted components.
> You might have to wait a bit for another documentation update if you don't use these. _Hang in there though, and sorry for the neglect!_

### Importing to your _.js_
```
  import { YourDesiredComponent } from 'es6-react-admin-lte';
```

### _OR_ importing directly to your _.html_
```
<!-- The necessary JS is in the project's ./dist/js directory -->
  <script src="{project}/node_modules/es6-react-admin-lte/dist/js/es6-react-admin-lte.min.js"></script>
```

### Using your components
Documentation on the components exists in the docs directory of the project, but the formats will usually look like this:
```
  <YourDesiredComponent
    stringProp="Some string value"
    nonStringProp={500}
    boolPropIsTrue
  >
    {/* child components and content */}
  </YourDesiredComponent>
```

### Using in your _.html_
**NOTE:** Check out the `index.html` file as an example of this stuff in action.

1. You'll want to import your desired dependencies to your file. _For example:_

        <!-- The necessary CSS is in the project's ./dist/css directory -->
          <link rel="stylesheet" href="{project}/node_modules/es6-react-admin-lte/dist/css/es6-react-admin-lte.min.css" />
        <!-- Import your desired JS files as well -->
          <script src="./react.js"></script>
        <!-- NOTE:
          We don't provide you with JS and CSS from...
            React,
            jQuery,
            Bootstrap,
            Font Awesome,
            jVectorMap, (for the Map Chart)
            etc.
          Pull them into your project as needed
        -->

2. You'll want to prepare your `<body>` for your desired AdminLTE theming and layout with the appropriate classes:

        <body class="skin-blue sidebar-mini"></body>

    - AdminLTE's built-in color themes include:

        `skin-blue`, `skin-purple`, `skin-yellow`, `skin-green`, `skin-red`, `skin-black`, `skin-black-light`
    - AdminLTE's layout themes include:

        `fixed`, `layout-boxed`, `layout-top-nav`, `sidebar-collapse`, `sidebar-mini`

3. You'll want to add an element to import your template to. Usually a `<div>` does the trick.

        <div id="project-goes-here"></div>
        <script src="./project-file-that-attaches-there.js"></script>




## Components you may enjoy to use
As we develop && document stuff, items on this list will be linked appropriately. _Consider this a table of contents && rough progress indicator of **done || !done**_.
- If item is _italicized_, it is currently subject to change.
- If item is not linked, it has no documentation or is not created.
- If item is [Linked](), it created and has some documentation, regardless of stability.

> ### Basic Layout Helpers
> - [Theme](docs/components/THEME.md)
> - [Wrapper](docs/components/WRAPPER.md)
> - [HeaderBar](docs/components/HEADER-BAR.md)
>     - [HeaderMessages](docs/components/HEADER-BAR.md)
>     - [HeaderNotifications](docs/components/HEADER-BAR.md)
>     - [HeaderTasks](docs/components/HEADER-BAR.md)
>     - [HeaderSidebarToggle](docs/components/HEADER-BAR.md)
>     - [HeaderUserMenu](docs/components/HEADER-BAR.md)
> - [NavSidebar](docs/components/NAV-SIDEBAR.md)
>     - [NavSidebarMenu](docs/components/NAV-SIDEBAR.md)
>         - [NavSidebarMenuItem](docs/components/NAV-SIDEBAR.md)
>     - [_NavSidebarUserPanel_](docs/components/NAV-SIDEBAR.md)
>     - NavSidebarSearch
> - [ContentWrapper](docs/components/CONTENT-WRAPPER.md)
> - [ControlsMenu](docs/components/CONTROLS-MENU.md)
>     - [ControlsMenuTab](docs/components/CONTROLS-MENU.md)
>        - [ControlsMenuTabSection](docs/components/CONTROLS-MENU.md)
> - [Footer](docs/components/FOOTER.md)
>
> ### Utilities
> - [LoadStatus](docs/components/UTILITIES.md)
> - [CalloutAlert](docs/components/UTILITIES.md)
> - [ErrorMessage](docs/components/UTILITIES.md)
> - [ErrorPage](docs/components/UTILITIES.md)
> - [Label](docs/components/UTILITIES.md)
> - [ProgressBar](docs/components/UTILITIES.md)
>
> ### Text
> - [Blockquote](docs/components/TEXT.md)
> - [List](docs/components/TEXT.md)
> - [DList](docs/components/TEXT.md)
>
> ### Forms
> - [Form](docs/components/FORM.md)
>     - [DatePicker](docs/components/FORM.md)
>     - [Select](docs/components/FORM.md)
>     - [Checkbox](docs/components/FORM.md)
>     - [SearchBar](docs/components/FORM.md)
> - [LoginForm](docs/components/COMMON-FORMS.md)
> - [RegisterForm](docs/components/COMMON-FORMS.md)
>
> ### Charts
> - [LineChart](docs/components/CHARTS.md)
> - [BarChart](docs/components/CHARTS.md)
> - [PieChart](docs/components/CHARTS.md)
> - [DoughnutChart](docs/components/CHARTS.md)
> - [RadarChart](docs/components/CHARTS.md)
> - [MapChart](docs/components/CHARTS.md)
>
> ### Social feed stuff
> - [ChatBox](docs/components/CHAT-BOX.md)
>     - [Conversations](docs/components/CHAT-BOX.md)
>     - [Contacts](docs/components/CHAT-BOX.md)
> - [ProfileCard](docs/components/PROFILE-CARD.md)
>     - [ProfileInfoList](docs/components/PROFILE-CARD.md)
>     - [ProfileInfoBlocks](docs/components/PROFILE-CARD.md)
> - [Post](docs/components/POST.md)
>     - [SocialButton](docs/components/POST.md)
>     - [SocialInfo](docs/components/POST.md)
> - [Timeline](docs/components/TIMELINE.md)
>     - [TimelineLabel](docs/components/TIMELINE.md)
>     - [TimelineItem](docs/components/TIMELINE.md)
>
> ### Tables
> - [SimpleTable](docs/components/TABLE.md)
> - [_DataTable_](docs/components/TABLE.md)
>
> ### Etc.
> - [Box](docs/components/BOX.md)
> - [StatTile](docs/components/STAT-TILE.md)
> - [InfoTile](docs/components/INFO-TILE.md)
> - [DropdownList](docs/components/DROPDOWN-LIST.md)
> - [Tabs](docs/components/TABS.md)
> - [Modal](docs/components/MODAL.md)
> - [ImageCarousel](docs/components/IMAGE-CAROUSEL.md)
> - [Accordion](docs/components/ACCORDION.md)
> - [_Feature_](docs/components/FEATURE.md)
> - [TodoList](docs/components/TODO-LIST.md)



---
---

## Updates
This section is hopefully one that gets updated from time to time the _more important_ update notifications. _This is a step in progress!_

- **2017-09-21:** Version 2.0.0 Update
    - Breaking remake the DataTable component.
      - We no longer rely on [react-bootstrap-table](https://allenfang.github.io/react-bootstrap-table/)
      - Check out the [component's documentation]((docs/components/TABLE.md)) for a rundown of using the new version of the component.
    - The DataTableButton component is no longer a thing. _It was mostly sort of pointless._
