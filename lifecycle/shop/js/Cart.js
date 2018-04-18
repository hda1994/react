class Cart extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.isOpen){
      return this.props.items.length !== nextProps.items.length;
    }
    return this.props.isOpen !== nextProps.isOpen;
  }
  
  render() {
    return (
      <CartView {...this.props} />
    );
  }

}
