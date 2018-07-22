import profiles from './profiles';
var listOfAccounts = profiles.listOfAccounts;
var me = profiles.me;

var databaseExample = {
  users: {
    0: listOfAccounts[0],
    1: listOfAccounts[1],
    2: listOfAccounts[2],
    3: listOfAccounts[3],
    4: listOfAccounts[4],
    5: listOfAccounts[5],
    6: me
  },
  getInfo(userID) {
    return this.users[userID];
  }
};

export default databaseExample;