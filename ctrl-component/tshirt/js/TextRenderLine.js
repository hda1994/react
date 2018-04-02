class TextRenderLine extends React.Component {
  onChange(event) {
    this.props.onChange(event.currentTarget.value);
  }
  
  render() {
    return (
      <input style={{width: '50%', margin: '10px auto'}} type='text' value={this.props.value} onChange={this.onChange.bind(this)} />
    );
  }
}