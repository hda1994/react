class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      formClass: 0
    };
  }
  
  formClass() {
    if(this.state.formClass === 0) {
      return 'form form--subscribe';
    }
    if(this.state.formClass === 1) {
      return 'form form--subscribe is-valid'
    }
    if(this.state.formClass === 2) {
      return 'form form--subscribe is-error'
    }
  }
  
  onChange(event) {
    if(event.currentTarget.validity.valid) {
      if(event.currentTarget.value === '') {
        this.setState({formClass: 0});
      } else {
        this.setState({formClass: 1});
      }
    }
    if(!event.currentTarget.validity.valid) {
      this.setState({formClass: 2});
    }
    this.setState({email: event.currentTarget.value});
  }
  
  render() {
  return (
        <div className="subscribe__form">
          <form className={this.formClass()}>
            <h4 className="form-title">Подписаться:</h4>
            <div className="form-group">
              <label htmlFor="input-email" className="sr-only">Email</label>
              <input type="email" id="input-email" placeholder="Email" className="form-control" value={this.state.email} onChange={this.onChange.bind(this)}/>
              <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
              <button type="submit" className="form-next">
                <i className="material-icons">keyboard_arrow_right</i>
              </button>
            </div>
          </form>
        </div>
        )
  }
};