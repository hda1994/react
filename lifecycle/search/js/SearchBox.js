class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }

  render() {
    return <SearchBoxView fixed={this.state.fixed} />
  }

  isFixed() {
    this.documentScroll = document.documentElement.scrollTop;
    return this.searchBoxTop - this.documentScroll <= 0;
  }

  setPosition() {
    this.setState({fixed: this.isFixed()});
  }
  
  componentDidMount() {
    this.searchBoxTop = document.querySelector('.search-box').offsetTop;
    this.scrollHandler = this.setPosition.bind(this);
    window.addEventListener('scroll', this.scrollHandler);
  }  
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
  
}
