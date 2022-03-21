export default class UserInfo {
    constructor({ nameSelector, selfInfoSelector}) {
        this._nameSelector = nameSelector;
        this._selfInfoSelector = selfInfoSelector;
        this._userName = document.querySelector(this._nameSelector);
        this._userInfo = document.querySelector(this._selfInfoSelector);
    }

    getUserInfo() {
        this._user = { userName: this._userName.textContent, userInfo: this._userInfo.textContent };
        return this._user;
    }

    setUserInfo(data) {
        this._userName.textContent = data.userName;
        this._userInfo.textContent = data.userInfo;
    }
}