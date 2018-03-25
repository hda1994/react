'use strict';

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://neto-api.herokuapp.com/etsy');
xhr.send();
xhr.addEventListener('load', event => {
  let fff =JSON.parse(event.currentTarget.responseText)
  ReactDOM.render(
    <Listing items={fff}/>,
    document.getElementById('root')
  );
});

function Listing({items}){
  return (<div className="item-list">{items.map(item => 
  <div key={item.listing_id} className="item">
    <div className="item-image">
      <a href={item.url}>
        <img src={item.MainImage.url_570xN}/>
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{item.title}</p>
      <p className="item-price">{priceStr(item.price, item.currency_code)}</p>
      <p className={level(item.quantity)}>{item.quantity} left</p>
    </div>
  </div>
)
          }</div>);
}

function priceStr(price, code){
  if(code==='USD'){
    return '$'+ price;
  }
  if(code==='EUR'){
    return '€'+ price;
  }
  return price + ' ' + code;
}

function level(quantity){
  if(quantity<=10){
    return 'item-quantity level-low';
  }
  if(quantity>20){
    return 'item-quantity level-high';
  }
  return 'item-quantity level-medium';
}