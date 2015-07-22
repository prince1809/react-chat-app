function ChatProxy(){
    EventEmitter.call(this);
    this._peers = {};
}

ChatProxy.prototype = Object.create(EventEmitter.prototype);

ChatProxy.prototype.connect = function(username){
    var self = this;
    this.setUsername(username);
    this.socket = io();
    this.socket.on('connect',function(){
        self.socket.on(Topics.USER_CONNECTED,function(userId){
            if(userId === self.getUsername()){
                return;
            }
            
            self._connectTo(userId);
            self.emit(Topics.USER_CONNECTED,userId);
            console.log('User connected',userId);
        });
        
        self.socket.on(Topics.USER_DISCONNECTED, function(userId){
            if(userId === self.getUsername()){
                return;
            }
            self._disconnectFrom(userId);
            self.emit(Topics.USER_DISCONNECTED,userId);
            console.log('User Disconnected', userId);
            
        });
    });
}