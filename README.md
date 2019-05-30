# prepopulated-select
An ES6 module for creating select elements with prepopulated data

# Examples
## Basic
```javascript
import PrepopulatedSelect from './PrepopulatedSelect.js';

new PrepopulatedSelect('#container', {
  id : 'countries',
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

## Data mapping
```javascript
import PrepopulatedSelect from './PrepopulatedSelect.js';

new PrepopulatedSelect('#container', {
  id : 'countries',
  data : {
    source : myDataSource,
    map : { // map the title and value for each option to a key in your data source
      title : 'name',
      value : 'id
    }
  },
  style : {
    class : 'class-name'
  }
});
```
