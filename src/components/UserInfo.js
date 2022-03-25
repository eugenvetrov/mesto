export default class UserInfo {
  constructor({ nameSelector, selfInfoSelector, avatarSelector }) {
    this._nameSelector = nameSelector;
    this._selfInfoSelector = selfInfoSelector;
    this._avatarSelector = avatarSelector;
    this._userName = document.querySelector(this._nameSelector);
    this._userInfo = document.querySelector(this._selfInfoSelector);
    this._avatar = document.querySelector(this._avatarSelector);
    this._id = "";
  }

  getUserInfo() {
    this._user = {
      name: this._userName.textContent,
      about: this._userInfo.textContent,
      avatar: this._avatar.src,
      _id: this._id,
    };
    return this._user;
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.about;
    this._avatar.src = data.avatar;
    this._id = data._id;
  }
}
