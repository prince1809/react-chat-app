/* global EventEmitter, Topics, io, peer */

'use strict';

function ChatProxy(){
    EventEmitter.call(this);
    this._peers = {};
}

ChatProxy.prototype = Object.create(EventEmitter.prototype);

ChatProxy.prototype.onMessage = function(cb){
  this.addListener(Topics.USER_MESSAGE,cb);
};
ChatProxy.prototype.getUsername = function(){
  return this._username;
};

ChatProxy.prototype.setUsername = function(username){
  this._username = username;
};

ChatProxy.prototype.connect = function(username){
  var self = this;
  this.setUsername(username);

  this.socket = io();
  this.socket.on('connect',function(){
    self.socket.on(Topics.USER_CONNECTED, function(userId){
      if(userId ===self.getUsername()){
        console.log('Welcome  ' +username);
        return;
      }
    })
  })

}
