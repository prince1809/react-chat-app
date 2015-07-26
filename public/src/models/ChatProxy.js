/* global EventEmitter, Topics, io, peer */

'use strict';

function ChatProxy(){
    EventEmitter.call(this);
    this._peers = {};
}

ChatProxy.prototype = Object.create(EventEmitter.prototype);