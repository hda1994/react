'use strict';

const AuthForm = function ({onAuth}){
  let tmp;
  
  let handleSubmit = e => { 
    e.preventDefault();
    let user = {};
    user.email = e.currentTarget.email.value;
    user.name = e.currentTarget.name.value;
    user.password = e.currentTarget.password.value;
    if(typeof onAuth === 'function'){
      onAuth(user);
    }
    else {
      console.log(user);
    } 
  }

  function checkValue(e) {
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
  <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={handleSubmit}>
  <div className="Input">
    <input required type="text" name="name" placeholder="Имя" />
    <label></label>
  </div>
  <div className="Input">
    <input required type="email" name="email" placeholder="Электронная почта" onChange={checkValue}/>
    <label></label>
  </div>
  <div className="Input">
    <input required required type="password" name="password" placeholder="Пароль" onChange={checkValue}/>
    <label></label>
  </div>
  <button type="submit">
    <span>Войти</span>
    <i className="fa fa-fw fa-chevron-right"></i>
  </button>
</form>
  );
}