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
  let tmp = props[propName];
  let isTmp = (typeof tmp == 'string') && /^https:\/\/vk\.com\/(id[0-9]+|[A-Za-z0-9_-]+$)/.test(tmp);
  return isTmp ? null : new Error(`Invalid ${propName} in ${componentName}: ${props.first_name} ${props.last_name}`);
}

const dateType = (props, propName, componentName) => {
  let tmp = props[propName];
  if(tmp == undefined){
    return new Error(`${propName} is undefined in ${componentName}: ${props.first_name} ${props.last_name}`)
  }
  let isTmp = (typeof tmp == 'string') && /^[1-2][0-9]{3}-(1[0-2]|0[1-9])-(3[0-1]|[1-2][0-9]|0[1-9])$/.test(tmp);
  
  let w = tmp.split('-');
	let x = new Date();
  let now = new Date();
	x.setFullYear(w[0]);
	x.setMonth(w[1]);
	x.setDate(w[2]);
  if(x - now > 0){
    return new Error(`Invalid ${propName} date is to biger (${x} > ${now}) in ${componentName}: ${props.first_name} ${props.last_name}`);
  }
  return isTmp ? null : new Error(`Invalid ${propName} in ${componentName}: ${props.first_name} ${props.last_name}`);
}

Profile.defaultProps = {
  img: './images/profile.jpg'
}

Profile.propTypes = {
  url: urlType,
  birthday: dateType
}