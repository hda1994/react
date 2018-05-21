'use strict';

const AuthForm = function ({onAuth}){
  let tmp;
  
  let send = e => { 
    e.preventDefault();
    let user = {};
    user.email = tmp.querySelector('input[type=email]').value;
    user.name = tmp.querySelector('input[type=text]').value;
    user.password = tmp.querySelector('input[type=password]').value;
    if(typeof onAuth === 'function'){
      onAuth(user);
    }
    else {
      console.log(user);
    } 
  }

  function check(e) {
    let mask;
    
    if(e.target.type === 'email'){
      mask = /[^\w\-\.@]+/;
    }
    if(e.target.type === 'password'){
      mask = /[^\w]+/;
    }
    e.target.value = e.target.value.replace(mask,'');
  }
  
  return (
  <form ref={el => tmp = el} className="ModalForm" action="/404/auth/" method="POST" onSubmit={send}>
  <div className="Input">
    <input required type="text" placeholder="Имя" onChange={check}/>
    <label></label>
  </div>
  <div className="Input">
    <input required type="email" placeholder="Электронная почта" onChange={check}/>
    <label></label>
  </div>
  <div className="Input">
    <input required required type="password" placeholder="Пароль" onChange={check}/>
    <label></label>
  </div>
  <button type="submit">
    <span>Войти</span>
    <i className="fa fa-fw fa-chevron-right"></i>
  </button>
</form>
  );
}