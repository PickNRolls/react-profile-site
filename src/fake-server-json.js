class ProfileTemplate {
  constructor (cfg) {
    this.page = cfg.page;
    this.friends = cfg.friends;
  }

  get name () {
    return this.page.name.first;
  }

  get fullName () {
    return this.page.name.first + ' ' + this.page.name.second;
  }

  get avatar () {
    return this.page.avatar;
  }
}

var anotherProfileInfo = new ProfileTemplate({
  page: {
    avatar: 'https://sun1-8.userapi.com/c834403/v834403654/185217/JKeTnM6ifPI.jpg?ava=1',
    name: {
      first: 'Серега',
      second: 'Симонов'
    },
    currentInfo: 'Sometimes the same is different...'
  },
  friends: {
    list: [0] // database.users.id
  }
});

var profileInfo = new ProfileTemplate({
  page: {
    avatar: 'https://pp.userapi.com/c638218/v638218049/7d400/hcV5FfVV5SA.jpg?ava=1',
    name: {
      first: 'Илья',
      second: 'Блинков'
    },
    currentInfo: 'Sometimes the same is different...'
  },
  friends: {
    list: [1] // database.users.id
  }
});

var databaseExample = {
  users: {
    0: profileInfo,
    1: anotherProfileInfo
  },
  getInfo(userID) {
    return this.users[userID];
  }
};

export default {
  profileInfo,
  anotherProfileInfo,
  databaseExample
};