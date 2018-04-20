'use strict';

const DateTime = props => {
    return (
        <p className="date">{props.date}</p>
    )
};

const correctDateTime = Component => props =>{ 
  let year = props.date.substr(0, 4);
  let month = props.date.substr(5, 2) - 1;
  let date = props.date.substr(8, 2);
  let hours = props.date.substr(11, 2);
  let minutes = props.date.substr(14, 2);
  let sec = props.date.substr(17, 2);
  let nowTime = new Date();
  let dateInfo;
  let tmpTime = new Date(year, month, date, hours, minutes, sec, 0);
  let time = (nowTime - tmpTime) / 1000/ 60;
  if(time < 60 * 24) {
    dateInfo = `${Math.round(time / 60)} часов назад`;
  } else {
    dateInfo = `${Math.round(time / 60 / 24)} дней назад`;
  }
  if(time < 60) {
    dateInfo = `${Math.round(time)} минут назад`;
  }
  return Component.call(this, {date: dateInfo});
}

let DateTimePretty = correctDateTime(DateTime);