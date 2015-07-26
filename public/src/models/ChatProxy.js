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
ChatProxy.prototype.connect = function(username){
  var self = this;
  console.log(username);
}
