class SearchBox extends React.Component {
  
  fun(event) {
    this.props.filterBooks(event.currentTarget.value);
  }
  
  render() {
    return (
      <input type="text" placeholder="Поиск по названию или автору" value={this.props.value} onChange={this.fun.bind(this)}/>
    );
  }
}