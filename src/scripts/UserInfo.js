export default class UserInfo {
    constructor({ nameSelector, selfInfoSelector}) {
        this._nameSelector = nameSelector;
        this._selfInfoSelector = selfInfoSelector;
    }

    getUserInfo() {
        this._userName = document.querySelector(this._nameSelector);
        this._userInfo = document.querySelector(this._selfInfoSelector);
        this._user = { username: this._userName.textContent, userinfo: this._userInfo.textContent };
        return this._user;
    }

    setUserInfo(data) {
        console.log(data);
        this._userName.textContent = data.username;
        this._userInfo.textContent = data.userinfo;
    }
}