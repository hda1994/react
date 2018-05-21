'use strict';
let recourse = [{ru: 'Мистер', en: 'mr', inp: true},
                {ru: 'Мистер', en: 'mr', inp: false},
                {ru: 'Мисис', en: 'mrs', inp: true},
                {ru: 'Мисис', en: 'mrs', inp: false},
                {ru: 'Мис', en: 'ms', inp: true},
                {ru: 'Мис', en: 'ms', inp: false}];

const FeedbackForm = function ({data, onSubmit}){
  let formNew = {
      salutation: data.salutation,
      name: data.name,
      subject: data.subject,
      message: data.message,
      email: data.email,
      snacks: data.snacks
  };
  
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

  function send(event) {
    event.preventDefault();
    let formData = {
      salutation: formNew.salutation.querySelector('input[type=radio]:checked').value,
      name: formNew.name.value,
      subject: formNew.subject.value,
      message: formNew.message.value,
      email: formNew.email.value,
      snacks: []
    }
    formNew.snacks.querySelectorAll('input[type=checkbox]:checked').forEach(e=>formData.snacks.push(e.value));
    console.log(formData);
    onSubmit(JSON.stringify(formData));
  }
  
  return(<form className="content__form contact-form"  onSubmit={send}>
  <div className="testing">
    <p>Чем мы можем помочь?</p>
  </div>
  <div ref={elem => formNew.salutation = elem} className="contact-form__input-group">
      {recourse.map(elem=>{
         if(elem.inp){
            return <input className="contact-form__input contact-form__input--radio" id={`salutation-${elem.en}`} name="salutation" type="radio" value={elem.ru} defaultChecked={firstRecourse(elem.ru)}/>
          } //'
          else {
            return <label className="contact-form__label contact-form__label--radio" htmlFor={`salutation-${elem.en}`}>{elem.ru}</label>
          }//`
        })
      } 
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label" htmlFor="name">Имя</label>
    <input ref={elem => formNew.name = elem} className="contact-form__input contact-form__input--text" id="name" name="name" type="text" defaultValue={data.name}/>
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
    <input ref={elem => formNew.email = elem} className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={data.email}/>
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
    <select ref={elem => formNew.subject = elem} className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={data.subject}>
      <option>У меня проблема</option>
      <option>У меня важный вопрос</option>
    </select>
  </div>
  <div className="contact-form__input-group">
    <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
    <textarea ref={elem => formNew.message = elem} className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={data.message}></textarea>
  </div>
  <div ref={elem => formNew.snacks = elem} className="contact-form__input-group">
    <p className="contact-form__label--checkbox-group">Хочу получить:</p>
    <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" defaultChecked={firstSnacks('пицца')}/>
    <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
    <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог" defaultChecked={firstSnacks('пирог')}/>
    <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
  </div>
  <button className="contact-form__button" type="submit">Отправить сообщение!</button>
  <output id="result"/>
</form>);
  
}
         
