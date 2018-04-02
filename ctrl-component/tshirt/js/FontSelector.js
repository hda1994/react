class FontSelector extends React.Component {
  onChange(event) {
    
    this.props.fonts.forEach(font => {
      if(font.name === event.currentTarget.id) {
        this.props.onSelect(font);
      }
    });
  }
  
  render() {
    return (
      <div style={{width: '50%', height: '20vh', overflow: 'auto', margin: '0 auto'}}>
    {this.props.fonts.map(font =>
      <div className="grid center font-item">
      <input type="radio" name="font" value={font.name} id={font.name} onChange={this.onChange.bind(this)} selected={this.props.selected}/>
      <label htmlFor={font.name} className="grid-1">
        <PictureFont text={'abc'} path={font.path}>
        </PictureFont>
      </label>
      </div>
      )
    }
      </div>
    );
  }
}