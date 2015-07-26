/** @jsx React.DOM */

'use strict';

var MessagesList = React.createClass({

  getInitialState: function(){
    return{
      messages: []
  };
},
render: function(){
  var messages;
  messages = this.state.messages.map(function(m){
    return (
      <ChatMessages message={'This is a custom mesage'}></ChatMessages>
    );
  });


  if(!messages.length){
    messages = <div className="chat-no-messages"> We don't any message right now</div>;
  }

  return (
    <div ref="messageContainer" className="chat-messages col-xs-9">
      {messages}
    </div>
  );
}


});
