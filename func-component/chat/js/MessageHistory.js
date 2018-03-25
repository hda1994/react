'use strict';

const MessageHistory = ({list}) => { 
  return <ul>{list.map(MessHistory)}</ul>;
}

const MessHistory = (mess) => {
  switch(mess.type){
    case 'message':
      return <Message from={mess.from} message={mess}/>;
    case 'response':
      return <Response from={mess.from} message={mess}/>;
    case 'typing':
      return <Typing from={mess.from} message={mess}/>;
    default:
      return null;
  }
}
