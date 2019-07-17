const Base = require('./base.js');
module.exports = class extends Base {
    async indexAction() {
        const user = this.model('user');
        const data = await user.select();
        return this.json(data);
    }
    async createAction(){
    const userName = this.post('user_name');
    const userTel = this.post('user_tel');
    const user = {user_name: userName, user_tel: userTel};
    const userId = await this.model('user').add(user);
    const newUser = await this.model('user').where({user_id: userId}).find();
    return this.json({newUser});
    }
    //更改数据
    async updateAction(){
    const userName = this.post('user_name');
    const newTel = this.post('new_tel');
    await this.model('user').where({user_name: userName}).update({user_tel:newTel});
    const updatedUser = await this.model('user').where({user_name:userName,user_tel:newTel}).select();
    return this.json({updatedUser});
    //return this.json({newUser});
    }
    //删除数据
    async deleteAction(){
    const userName = this.post('user_name');
    await this.model('user').where({user_name:userName}).delete();
    return this.indexAction();
    }
    //查找数据
    async findAction(){
    const userId = this.get('user_id');
    const userList = await this.model('user').where({user_id:userId}).select();
    }
    
};
