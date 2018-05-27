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
    let value = props[propName];
    let isValid = (typeof value == 'string') && /^[a-zA-ZА-Яа-я]+$/.test(value);
    return isValid ? null : new Error(`${propName} in ${componentName}: ${value} expected abcde`);
  }
  if(props.type === 'email'){
    let value = props[propName];
    let isValid = (typeof value == 'string') && /^[A-Za-z0-9][A-Za-z0-9\._\-]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9\-]*[A-Za-z0-9]+)*\.)+[A-Za-z]{2,6}$/.test(value);
    return isValid ? null : new Error(`${propName} in ${componentName}: ${value} expected abc@abc.abc`);
  }
}

TextInput.propTypes = {
  value: textInputType,
  required: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func
};
