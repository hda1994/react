'use strict';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }
  
  onSelect (filt,f){
    this.setState({counter: f.indexOf(filt)});
  }
  
  tttt(is) {
     if(is == 'All'){
       return this.props.projects;
     }
    return this.props.projects.filter(elem => elem.category == is);
  }
  
  render(){
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.props.filters[this.state.counter]}
          onSelectFilter={(filt)=>                            this.onSelect(filt, this.props.filters)} />
        <Portfolio projects={this.tttt(this.props.filters[this.state.counter])} />
      </div>
    )
  }
}