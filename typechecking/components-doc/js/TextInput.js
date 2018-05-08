'use strict';

const TextInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type={props.type} className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required}/>
    </div>
  )
};

const textInputType = (props, propName, componentName) => {
  if(props.type === 'text'){
    let tmp = props[propName];
    let isTmp = (typeof tmp == 'string') && /^[a-zA-ZА-Яа-я]+$/.test(tmp);
    return isTmp ? null : new Error(`${propName} in ${componentName}: ${tmp} expected abcde`);
  }
  if(props.type === 'email'){
    let tmp = props[propName];
    let isTmp = (typeof tmp == 'string') && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(tmp);
    return isTmp ? null : new Error(`${propName} in ${componentName}: ${tmp} expected abc@abc.abc`);
  }
}

TextInput.propTypes = {
  value: textInputType,
  required: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func
};
