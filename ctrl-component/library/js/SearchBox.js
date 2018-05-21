const SearchBox = function ({value, filterBooks}){
  function fun(event) {
    filterBooks(event.currentTarget.value);
  }
  
  return (
      <input type="text" placeholder="Поиск по названию или автору" value={value} onChange={fun}/>
    );
}