import profiles from './profiles';
var listOfAccounts = profiles.listOfAccounts;
var me = profiles.me;

var databaseExample = {
  users: {
    0: me,
    1: listOfAccounts[0],
    2: listOfAccounts[1],
    3: listOfAccounts[2],
    4: listOfAccounts[3],
    5: listOfAccounts[4],
    6: listOfAccounts[5]
  },
  getInfo(userID) {
    return this.users[userID];
  }
};

export default databaseExample;