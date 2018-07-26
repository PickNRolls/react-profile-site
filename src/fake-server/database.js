import profiles from './profiles';
import walls from './posts';
var listOfAccounts = profiles.listOfAccounts;
var me = profiles.me;

var databaseExample = {
  users: {
    _admin: me
  },
  walls: walls,
  getInfo (userID) {
    return this.users[userID];
  },
  getWall (userID) {
    return this.walls[userID];
  }
};

listOfAccounts.forEach(function (account) {
  databaseExample.users[account.id] = account;
});

export default databaseExample;