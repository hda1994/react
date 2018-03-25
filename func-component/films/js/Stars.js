'use strict';

function Stars({count}) {
  return <ul className="card-body-stars u-clearfix">
    {(count<1 || count>5 || typeof count !== 'number') ? null : renderLis(count)}</ul>;
}

const renderLis = count => {
  let tmpArr = [];
  for(let i=0; i<count; i++){
    tmpArr.push(1);
  }
  return tmpArr.map(item => <li><Star /></li> );
}