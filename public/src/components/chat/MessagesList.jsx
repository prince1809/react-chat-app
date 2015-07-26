/** @jsx React.DOM */

'use strict';

var MessagesList = React.createClass({

  getInitialState: function(){
    return{
      messages: []
  };
},
render: function(){
  var messages = 'This is my personal Message';
  return (
    <div ref="messageContainer" className="chat-messages col-xs-9">
      {messages}
    </div>
  );
}


});
