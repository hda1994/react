'use strict';

const AuthForm = function ({onAuth}){
  
  let user = {}
  let send = e => { 
    e.preventDefault();
    if(typeof onAuth === 'function' && user.text !== undefined && user.password !== undefined && user.email !== undefined){
      onAuth(user);
    }
  }
  function get(e) {
    user[e.currentTarget.type] = e.currentTarget.value;
  }
  function check(e) {
    let mask;
    if(e.target.type === 'text'){
      mask = /[.]/;
    }
    if(e.target.type === 'email'){
      mask = /[^a-zA-z0-9_\-\.@]+/;
    }
    if(e.target.type === 'password'){
      mask = /[^a-zA-z0-9_]+/;
    }
    e.target.value = e.target.value.replace(mask,'');
    get(e);
  }
  
  
  return (
  <form className="ModalForm" action="/404/auth/" method="POST">
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
  <button type="submit" onSubmit={send} onClick={send}>
    <span>Войти</span>
    <i className="fa fa-fw fa-chevron-right"></i>
  </button>
</form>
  );
}