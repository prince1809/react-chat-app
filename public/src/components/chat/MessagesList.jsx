/** @jsx React.DOM */

'use strict';

var MessagesList = React.createClass({

  getInitialState: function(){
    return{
      messages: []
  };
},
addMessage: function(message){
  var messages = this.state.messages;
  var container = this.refs.messageContainer.getDOMNode();
  messages.push(message);
  this.setState({ messages: messages});
},
render: function(){
  var messages;
  messages = this.state.messages.map(function(m){
    return (
      <ChatMessage message={m}></ChatMessage>
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
