/** @jsx React.DOM */

'use strict';

var ChatBox = React.createClass({

    getInitialState: function(){
        return { users: [] };
    },

    componentDidMount: function(){

    },
    render: function(){
      return(
        <div className="chat-box" ref="root">
          <div className="chat-header ui-widget-header">React p2p Chat</div>
          <div className="chat-content-wrapper row">
            <MessagesList ref="MessagesList"></MessagesList>

          </div>
        </div>
      )
    }
});