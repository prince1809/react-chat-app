/** @jsx React.DOM */

'use strict';

var ChatBox = React.createClass({

    getInitialState: function(){
        return { users: [] };
    },
    addMessage: function(message){
      if(message){
        message.date = new Date();
        this.refs.MessagesList.addMessage(message);
      }
    },
    userConnected: function(user){
      var users = this.state.users;
      users.push(user);
      this.setState({
        users: users
      });
    },
    userDisconnected: function(user){
      var users = this.state.users;
      users.splice(users.indexof(user),1);
      this.setState({
        users: users
      });
    },
    componentDidMount: function(){
      this.chatProxy = this.props.chatProxy;
      this.chatProxy.connect(this.props.username);
      this.chatProxy.onMessage(this.addMessage.bind(this));
      this.chatProxy.onUserConnected(this.userConnected.bind(this));
      this.chatProxy.onUserDisconnected(this.userDisconnected.bind(this));
    },
    messageHandler: function(message){
      message = this.refs.MessageInput.getDOMNode().value;
      this.addMessage({
        content: message,
        author: this.chatProxy.getUsername()
      });
      this.chatProxy.broadcast(message);
    },
    render: function(){
      return(
        <div className="chat-box" ref="root">
          <div className="chat-header ui-widget-header">React p2p Chat</div>
          <div className="chat-content-wrapper row">
            <MessagesList ref="MessagesList"></MessagesList>
            <UsersList users={this.state.users} ref="usersList"></UsersList>
          </div>
          <MessageInput
            ref="MessageInput"
            messageHandler={this.messageHandler}>
          </MessageInput>
        </div>
      );
    }
});
