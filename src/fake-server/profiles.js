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

var listOfAccounts = [
  new ProfileTemplate({
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
  }),
  new ProfileTemplate({
    page: {
      avatar: 'https://pp.userapi.com/c848636/v848636320/2cc56/7Hy36GAOEec.jpg?ava=1',
      name: {
        first: 'Анатолий',
        second: 'Овчаренко'
      },
      currentInfo: 'Python is the best!'
    },
    friends: {
      list: [0]
    }
  }),
  new ProfileTemplate({
    page: {
      avatar: 'https://pp.userapi.com/c824701/v824701172/ca951/v6lx1KNFh9M.jpg?ava=1',
      name: {
        first: 'Александр',
        second: 'Проводников'
      },
      currentInfo: 'Basketball is my life'
    },
    friends: {
      list: [0]
    }
  }),
  new ProfileTemplate({
    page: {
      avatar: 'https://pp.userapi.com/c840331/v840331523/88960/VbUEHx2TZbY.jpg?ava=1',
      name: {
        first: 'Даниил',
        second: 'Чагин'
      },
      currentInfo: 'Фриланс говно, а брать деньги у мамы - нет!'
    },
    friends: {
      list: [0]
    }
  }),
  new ProfileTemplate({
    page: {
      avatar: 'https://pp.userapi.com/c847122/v847122948/4691d/gRwS4SGn5fY.jpg?ava=1',
      name: {
        first: 'Витя',
        second: 'Манджиев'
      },
      currentInfo: 'Calmik'
    },
    friends: {
      list: [0]
    }
  }),
  new ProfileTemplate({
    page: {
      avatar: 'https://pp.userapi.com/c840433/v840433540/43fc0/pATMD8bRIUw.jpg?ava=1',
      name: {
        first: 'Марина',
        second: 'Граф'
      },
      currentInfo: 'Hi zyables, i\'m from ingland!'
    },
    friends: {
      list: [0]
    }
  })
];

var me = new ProfileTemplate({
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

export default {
  me,
  listOfAccounts
};