const Base = require('./base.js');

module.exports = class extends Base{
    openAction()
    {
        console.log('we open');
        this.broadcast('open','open2');
    }
    closeAction(){
        console.log('ws close');
        return this.success();
    }
    messageAction(){
        const data = this.wsData.data;
        this.broadcast('message',data);
    }
    onlineAction()
    {
        const id=this.wsData.data.id;
        userList.push(id);
        this.broadcast('online',`游客${id}上线`)；
    }
    offlineAction()
    {
        const id=this.wsData.data.id;
        userList.push(id);
        this.broadcast('online',`游客${id}下线`)；
    }
};