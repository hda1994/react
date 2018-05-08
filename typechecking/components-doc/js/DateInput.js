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
  let tmp = props[propName];
  if(tmp == undefined || tmp == ''){
    return new Error(`${propName} is undefined in ${componentName}`)
  }
  let isTmp = (typeof tmp == 'string') && /^[1-2][0-9]{3}-(1[0-2]|0[1-9])-(3[0-1]|[1-2][0-9]|0[1-9])$/.test(tmp);
  if(isTmp){
    let w = tmp.split('-');
    let x = new Date();
    let now = new Date();
    x.setFullYear(w[0]);
    x.setMonth(w[1]);
    x.setDate(w[2]);
    if(x - now > 0){
      return new Error(`Invalid ${propName} date is to biger (${x} > ${now}) in ${componentName}`);
    }
    return null;
  } 
  return new Error(`Invalid ${propName} in ${componentName}: ${tmp} expected YYYY-MM-DD`);
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