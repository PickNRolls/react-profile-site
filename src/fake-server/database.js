import profiles from './profiles';
var listOfAccounts = profiles.listOfAccounts;
var me = profiles.me;

var databaseExample = {
  users: {
    _admin: me
  },
  getInfo(userID) {
    return this.users[userID];
  }
};

listOfAccounts.forEach(function (account) {
  databaseExample.users[account.id] = account;
});

export default databaseExample;