class PrepopulatedSelect {

  constructor(selector, opts) {
    const data = opts.data;
    this.generate(selector, data, opts);
  }

  generate(selector, data, opts) {
    const target = document.querySelector(selector);
    const dropdown = this.createDropdownElement(opts);
    const options = this.createOptions(dropdown, data);
    target.append(dropdown);
  }

  createDropdownElement(opts) {
    const dropdown = document.createElement('select');
          dropdown.setAttribute('class', opts.style.class);
          dropdown.setAttribute('id', opts.id);
    return dropdown;
  }

  createOptions(dropdown, data) {
    data.source.forEach(el => {
      let title, value;
      if (data.map) {
        title = el[data.map.title];
        value = el[data.map.value];
      } else {
        title = el.title;
        value = el.value;
      }
      const option = document.createElement('option');
            option.text = title;
            option.value = value;

      if (value === data.default) {
        option.setAttribute('selected', '');
      }

      dropdown.add(option);
    });
  }

}

export default PrepopulatedSelect;
