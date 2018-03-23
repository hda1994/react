Date.prototype.daysInMonth = function() {
		return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
}

function calendarMonth(items){
  return (<tbody>{items.map(calendarWeek)}</tbody>);
}
function calendarWeek(items){
  return (<tr>{items.map(calendarDay)}</tr>);
}
function calendarDay(item){
  if(item.isThisMonth){
    if(item.isToday){
      return (<td className="ui-datepicker-today">{item.day}</td>);
    } else {
      return (<td>{item.day}</td>);
    }
  } else {
     return (<td className="ui-datepicker-other-month">{item.day}</td>);       
  }
}

const Calendar = function({date}) {
  let dayName = date.getDay();
  switch(dayName){
    case 0:
      dayName = 'Воскресение';
      break;
    case 1:
      dayName = 'Понедельник';
      break;
    case 2:
      dayName = 'Вторник';
      break;
    case 3:
      dayName = 'Среда';
      break;
    case 4:
      dayName = 'Четверг';
      break;
    case 5:
      dayName = 'Пятница';
      break;
    case 6:
      dayName = 'Суббота';
      break;
  }
  let year = date.getFullYear();
  let day = date.getDate();
  let monthNameR;
  let monthName = date.getMonth();
  switch(monthName){
    case 0:
      monthName = 'Январь';
      monthNameR = 'Января';
      break;
    case 1:
      monthName = 'Февраль';
      monthNameR = 'Февраля';
      break;
    case 2:
      monthName = 'Март';
      monthNameR = 'Марта';
      break;
    case 3:
      monthName = 'Апрель';
      monthNameR = 'Апреля';
      break;
    case 4:
      monthName = 'Май';
      monthNameR = 'Мая';
      break;
    case 5:
      monthName = 'Июнь';
      monthNameR = 'Июня';
      break;
    case 6:
      monthName = 'Июль';
      monthNameR = 'Июля';
      break;
    case 7:
      monthName = 'Август';
      monthNameR = 'Августа';
      break;
    case 8:
      monthName = 'Сентябрь';
      monthNameR = 'Сентября';
      break;
    case 9:
      monthName = 'Октябрь';
      monthNameR = 'Октября';
      break;
    case 10:
      monthName = 'Ноябрь';
      monthNameR = 'Ноября';
      break;
    case 11:
      monthName = 'Декабрь';
      monthNameR = 'Декабря';
      break;
  }
  let tmpDate = new Date(date.getFullYear(),date.getMonth(), 1);
  let tmpDateLast = new Date(date.getFullYear(),date.getMonth()-1, 1);
  let dayInLast = tmpDateLast.daysInMonth();
  let dayIn = tmpDate.daysInMonth();
  let checkDay = tmpDate.getDay();
  checkDay = checkDay==0? 7 : checkDay;
  let showDays = [];
  for(let i = 2; i<=checkDay; i++){
    let tmpD = dayInLast-checkDay+i;
    showDays.push({day: tmpD, isThisMonth: false, isToday: false});
  }
  for(let i= 1; i<=dayIn; i++){
    if(i == date.getDate()){
      showDays.push({day: i, isThisMonth: true, isToday: true});
    } else {
      showDays.push({day: i, isThisMonth: true, isToday: false});
    }
  }
  let tmpI = 1;
  while(showDays.length % 7!==0){
    showDays.push({day: tmpI++, isThisMonth: false, isToday: false});
  }
  let showDays2D = [];
  for(let i=0; i<showDays.length; i+=7){
    showDays2D.push(showDays.slice(i,i+7));
  }
  return (
  <div className="ui-datepicker">
  <div className="ui-datepicker-material-header">
    <div className="ui-datepicker-material-day">{dayName}</div>
    <div className="ui-datepicker-material-date">
      <div className="ui-datepicker-material-day-num">{day}</div>
      <div className="ui-datepicker-material-month">{monthNameR}</div>
      <div className="ui-datepicker-material-year">{year}</div>
    </div>
  </div>
  <div className="ui-datepicker-header">
    <div className="ui-datepicker-title">
      <span className="ui-datepicker-month">{monthName} </span><span className="ui-datepicker-year">{year}</span>
    </div>
  </div>
  <table className="ui-datepicker-calendar">
    <colgroup>
      <col />
      <col />
      <col />
      <col />
      <col />
      <col className="ui-datepicker-week-end" />
      <col className="ui-datepicker-week-end" />
    </colgroup>
    <thead>
      <tr>
        <th scope="col" title="Понедельник">Пн</th>
        <th scope="col" title="Вторник">Вт</th>
        <th scope="col" title="Среда">Ср</th>
        <th scope="col" title="Четверг">Чт</th>
        <th scope="col" title="Пятница">Пт</th>
        <th scope="col" title="Суббота">Сб</th>
        <th scope="col" title="Воскресенье">Вс</th>
      </tr>
    </thead>
    {calendarMonth(showDays2D)}
  </table>
</div>
  );
}