export default class UserInfo {
  constructor({id, userName, userProf, userAvatar}){
    // this._userName = document.querySelector(userName);
    // this._userProf = document.querySelector(userProf);
    this._userName = userName;
    this._userProf =userProf;
    this._id = id;
    this._userAvatar = userAvatar;
  }
  getUserInfo(){
    const profileInfo = {
      name: this._userName.textContent,
      about: this._userProf.textContent,
      _id: this._id,
      avatar: this._userAvatar.src
    };
    return profileInfo;
  }
  setUserInfo(id, name, about, avatar){
    this._userName.textContent = name;
    this._userProf.textContent = about;
    this._id = id;
    this._userAvatar.src = avatar;
  }
};
