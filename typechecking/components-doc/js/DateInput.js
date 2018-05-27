'use strict';

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};


const dateInputType = (props, propName, componentName) => {
  const value = props[propName];
  if(value === undefined || value === ''){
    return new Error(`${propName} is undefined in ${componentName}`)
  }
  const isValid = (typeof value === 'string') && /^[1-2][0-9]{3}-(1[0-2]|0[1-9])-(3[0-1]|[1-2][0-9]|0[1-9])$/.test(value);
  if(isValid){
    const stringDate = value.split('-');
    let checkDate = new Date();
    const nowDate = new Date();
    checkDate.setFullYear(stringDate[0]);
    checkDate.setMonth(stringDate[1]);
    checkDate.setDate(stringDate[2]);
    if(checkDate > nowDate){
      return new Error(`Not a valid date ${propName}. ${componentName} date too large(${checkDate} > ${nowDate}).`);
    }
    return null;
  } 
  return new Error(`Invalid ${propName} in ${componentName}: ${value} expected YYYY-MM-DD`);
}

let getNowDate = () => {
  let now = new Date();
  let mm = now.getMonth()+1 >= 10 ? `${now.getMonth()+1}` : `0${now.getMonth()+1}`;
  let dd = now.getDate() >= 10 ? `${now.getDate()}` : `0${now.getDate()}`;
  return `${now.getFullYear()}-${mm}-${dd}`;
}

DateInput.defaultProps = {
  value: getNowDate()
};

DateInput.propTypes = {
  value: dateInputType,
  required: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func
};