'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

const urlType = (props, propName, componentName) => {
  let value = props[propName];
  let isValid = (typeof value === 'string') && /^https:\/\/vk\.com\/(id[0-9]+|[A-Za-z0-9_-]+$)/.test(value);
  return isValid ? null : new Error(`Invalid ${propName} in ${componentName}: ${props.first_name} ${props.last_name}`);
}

const dateType = (props, propName, componentName) => {
  let value = props[propName];
  if(value === undefined){
    return new Error(`${propName} is undefined in ${componentName}: ${props.first_name} ${props.last_name}`)
  }
  let isValid = (typeof value == 'string') && /^[1-2][0-9]{3}-(1[0-2]|0[1-9])-(3[0-1]|[1-2][0-9]|0[1-9])$/.test(value);
  const stringDate = value.split('-');
  let checkDate = new Date();
  const nowDate = new Date();
  checkDate.setFullYear(stringDate[0]);
  checkDate.setMonth(stringDate[1]);
  checkDate.setDate(stringDate[2]);
  if(checkDate > nowDate){
    return new Error(`Not a valid date ${propName}. ${componentName} date too large (${checkDate} > ${nowDate}): ${props.first_name} ${props.last_name}`);
  }
    
  return isValid ? null : new Error(`Invalid ${propName} in ${componentName}: ${props.first_name} ${props.last_name}. Expected YYYY-MM-DD`);
}

Profile.defaultProps = {
  img: './images/profile.jpg'
}

Profile.propTypes = {
  url: urlType,
  birthday: dateType
}