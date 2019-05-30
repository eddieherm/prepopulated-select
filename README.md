# prepopulated-select
An ES6 module for creating select elements with prepopulated data

# Examples

## Data Source
The data source must be an array of objects. The default keys are **title** and **value**. You can use the **Data Mapping** property to map these to different keys in your data set.
```javascript
[
  {
    title : "Morocco",
    value : "MO"
  },
  {
    title : "New Zealand",
    value : "NZ"
  },
  {
    title : "United Kingdon",
    value : "UK"
  }
]
```
## Basic
```javascript
import PrepopulatedSelect from './PrepopulatedSelect.js';

new PrepopulatedSelect('#container', { // #container is the target DOM element where the dropdown will be created
  id : 'countries', // give your select element a unique id
  data : {
    source : myDataSource
  }
});
```

## Styles and Classes
```javascript
import PrepopulatedSelect from './PrepopulatedSelect.js';

new PrepopulatedSelect('#container', {
  id : 'countries',
  data : {
    source : myDataSource
  },
  style : {
    class : 'class-name' // add a CSS class to the select dropdown
  }
});
```

## Data Mapping
```javascript
import PrepopulatedSelect from './PrepopulatedSelect.js';

new PrepopulatedSelect('#container', {
  id : 'countries',
  data : {
    source : myDataSource,
    map : { // map the title and value for each option to a key in your data source
      title : 'name',
      value : 'id'
    }
  },
  style : {
    class : 'class-name'
  }
});

```
## Setting Default Selected Option
```javascript
import PrepopulatedSelect from './PrepopulatedSelect.js';

new PrepopulatedSelect('#container', {
  id : 'countries',
  data : {
    source : myDataSource,
    map : {
      title : 'name',
      value : 'id'
    },
    default : 24 // set the default option based on value
  },
  style : {
    class : 'class-name'
  }
});
```
