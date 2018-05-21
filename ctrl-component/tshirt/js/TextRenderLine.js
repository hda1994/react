
const TextRenderLine = function ({value, onChange}){
  function change(event) {
    let tmp = event.currentTarget.value.toLowerCase().replace(/[^a-z\s]/,'');      
    onChange(tmp);
  }
  
  return (
      <textarea style={{width: '50%', margin: '10px auto'}} type='textarea' value={value} onChange={change} />
    );
}