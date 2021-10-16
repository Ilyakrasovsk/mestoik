export default class UserInfo {
  constructor({userName, userProf}){
    this._userName = document.querySelector(userName);
    this._userProf = document.querySelector(userProf);
  }
  getUserInfo(){
    const profileInfo = {
      name: this._userName.textContent,
      prof: this._userProf.textContent
    };
    return profileInfo;
  }
  setUserInfo(name, prof){
    this._userName.textContent = name;
    this._userProf.textContent = prof;
  }
};
