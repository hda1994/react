const Menu = function({items, opened}) {
  if(opened){
    const tmp = items.map((item, index)=><li><a href={item.href}>{item.title}</a></li>);
  return (
    <div className="menu menu-open">
      <div className="menu-toggle"><span></span></div>
      <nav>
        <ul>
          {tmp}
        </ul>
      </nav>
    </div>
  );
  } else {
  return (
    <div className="menu">
      <div className="menu-toggle"><span></span></div>
    </div>
  );
  }
}