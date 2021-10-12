export default class UserInfo {
  constructor({userName, userProf}){
    this._userName = userName;
    this._userProf = userProf;
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
