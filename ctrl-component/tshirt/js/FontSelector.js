
const FontSelector = function ({fonts, selected, onSelect}){
  function change(event) {
    fonts.forEach(font => {
      if(font.name === event.currentTarget.id) {
        onSelect(font);
      }
    });
  }
  
  return (
      <div style={{width: '50%', height: '20vh', overflow: 'auto', margin: '0 auto'}}>
    {fonts.map(font =>
      <div className="grid center font-item">
      <input type="radio" name="font" value={font.name} id={font.name} onChange={change} selected={selected}/>
      <label htmlFor={font.name} className="grid-1">
        <PictureFont text='abc' path={font.path}>
        </PictureFont>
      </label>
      </div>
      )
    } 
      </div>
    );
}