'use strict';

const Popular = props => {
    return (
        <div className="wrap-item wrap-item-popular">
        <span className="label">Popular!</span>
        {props.children}
        </div>
    )
};

const withData = (Component) => class extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {};
  }
  
  componentDidMount() {
    this.setState({name: false});
    if(this.props.views >= 1000) {
      this.setState({name: 'popular'});
    }
    if(this.props.views < 100) {
      this.setState({name: 'new'});
    }
  }
  
  render() {
    let {name} = this.state;
    if(name == 'popular') {
      return (<Popular {...this.props}>
        <Component {...this.props} />
        </ Popular>);
    } 
    if(name == 'new') {
      return (<New {...this.props}>
        <Component {...this.props} />
        </ New>);
    }
    return (<Component {...this.props} />);
    
  }
}