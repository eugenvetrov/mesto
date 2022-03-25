export default class UserInfo {
  constructor({ nameSelector, selfInfoSelector }) {
    this._nameSelector = nameSelector;
    this._selfInfoSelector = selfInfoSelector;
    this._userName = document.querySelector(this._nameSelector);
    this._userInfo = document.querySelector(this._selfInfoSelector);
    this._id = "";
  }

  getUserInfo() {
    this._user = {
      name: this._userName.textContent,
      about: this._userInfo.textContent,
      _id: this._id,
    };
    return this._user;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.about;
    this._id = data._id;
  }
}
