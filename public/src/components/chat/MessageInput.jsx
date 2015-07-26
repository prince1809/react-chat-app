/** @jsx React.DOM */

'use strict';

var MessageInput = React.createClass({

  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
    return { message: '' };
  },
  keyHandler: function(event){
    var msg = this.state.message.trim();
    console.log(msg);
    if(event.keyCode === 13  && msg.length){
      this.props.messageHandler(msg);
      console.log(msg);
      this.setState({ message: ''});
    }
  },

  render: function(){
    return(
      <input type="text"
      className='form-control'
      placeholder='Enter a message.....'
      valueLink = {this.linkState('message')}
      onKeyUp={this.keyHandler} />
  );
  }
})
