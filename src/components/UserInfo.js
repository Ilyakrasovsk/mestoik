export default class UserInfo {
  constructor(name, prof){
    this._name = name;
    this._prof = prof;
  }
  getUserInfo(){
    const profileInfo = {
      name: this._name.textContent,
      prof: this._prof.textContent
    };
    return profileInfo;
  }
  setUserInfo(name, prof){
    this._name.textContent = name;
    this._prof.textContent = prof;
  }
};
