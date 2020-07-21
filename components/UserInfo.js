    export class UserInfo {
    constructor(profileName, profileJob) {
      this._profileName = profileName;
      this._profileJob = profileJob;
    }
  
    getUserInfo() {
        let userInfo = {
            name:  this._profileName.textContent,
            job:  this._profileJob.textContent
          };

        return userInfo;
    }
  
    setUserInfo(name, job) {
        this._profileName.textContent = name;
        this._profileJob.textContent = job;
    }
  }