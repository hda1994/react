'use strict';
let recourse = [{ru: 'Мистер', en: 'mr', inp: true},
                {ru: 'Мистер', en: 'mr', inp: false},
                {ru: 'Мисис', en: 'mrs', inp: true},
                {ru: 'Мисис', en: 'mrs', inp: false},
                {ru: 'Мис', en: 'ms', inp: true},
                {ru: 'Мис', en: 'ms', inp: false}];

const FeedbackForm = function ({data, onSubmit}){

  function firstRecourse(r) { 
    if(r === data.salutation){
      return true;
    }
    return false;
  }
  function firstSnacks(text){
    for(let s of data.snacks){
      if(s===text){
        return true;
      }
    }
    return false;
  }
  function getSnacks(e){
    if(e.currentTarget.checked){
      data.snacks.push(e.currentTarget.value);
    } else {
      data.snacks.splice(data.snacks.indexOf(e.currentTarget.value),1);
    }
  }
  function get(e) {
    data[e.currentTarget.name] = e.currentTarget.value;
  }
  function send() {
    onSubmit(JSON.stringify(data));
  }
  
  return(<form class="content__form contact-form">
  <div class="testing">
    <p>Чем мы можем помочь?</p>
  </div>
  <div class="contact-form__input-group">
      {recourse.map(elem=>{
         if(elem.inp){
            return <input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value={elem.ru} onChange={get} defaultChecked={firstRecourse(elem.ru)}/>
          } else {
            return <label className="contact-form__label contact-form__label--radio" htmlFor={'salutation-'+elem.en}>{elem.ru}</label>
          }})
      }
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label" htmlFor="name">Имя</label>
    <input className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={data.name} onChange={get}/>
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
    <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={data.email} onChange={get}/>
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
    <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={data.subject} onChange={get}>
      <option>У меня проблема</option>
      <option>У меня важный вопрос</option>
    </select>
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
    <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={data.message} onChange={get}></textarea>
  </div>
  <div className="contact-form__input-group">
    <p className="contact-form__label--checkbox-group">Хочу получить:</p>
    <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" defaultChecked={firstSnacks('пицца')} onChange={getSnacks}/>
    <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
    <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог" defaultChecked={firstSnacks('пирог')} onChange={getSnacks}/>
    <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
  </div>
  <button className="contact-form__button" type="submit" onSubmit={send}>Отправить сообщение!</button>
  <output id="result" />
</form>);
  
}
         
