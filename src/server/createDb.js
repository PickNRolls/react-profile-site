var User = require('./models/user');
var Wall = require('./models/wall');
var mongoose = require('./mongoose');
var count = 0;

// count = 1;
// Log -> '000000001'

var getId = function () {
  var current = '' + count++;
  var len = current.length;
  var oString = '';

  for (var i = 9; i > len; i--) {
    oString += 0;
  }

  return oString + current;
};


var accounts = [
  new User({
    _id: getId(),
    name: {
      first: 'Серега',
      last: 'Симонов'
    },
    birth: Date.now(),
    page: {
      avatar: 'https://sun1-8.userapi.com/c834403/v834403654/185217/JKeTnM6ifPI.jpg?ava=1',
      currentInfo: 'Zyables?'
    },
    friends: ['000000001']
  }),
  new User({
    _id: getId(),
    name: {
      first: 'Анатолий',
      last: 'Овчаренко'
    },
    birth: Date.now(),
    page: {
      avatar: 'https://pp.userapi.com/c848636/v848636320/2cc56/7Hy36GAOEec.jpg?ava=1',
      currentInfo: 'Python is the best!'
    },
    friends: ['000000002']
  }),
  new User({
    _id: getId(),
    name: {
      first: 'Александр',
      last: 'Проводников'
    },
    birth: Date.now(),
    page: {
      avatar: 'https://pp.userapi.com/c824701/v824701172/ca951/v6lx1KNFh9M.jpg?ava=1',
      currentInfo: 'Basketball is my life'
    },
    friends: ['000000003']
  }),
  new User({
    _id: getId(),
    name: {
      first: 'Даниил',
      last: 'Чагин'
    },
    birth: Date.now(),
    page: {
      avatar: 'https://pp.userapi.com/c840331/v840331523/88960/VbUEHx2TZbY.jpg?ava=1',
      currentInfo: 'Фриланс говно, а брать деньги у мамы - нет!'
    },
    friends: ['000000004']
  }),
  new User({
    _id: getId(),
    name: {
      first: 'Витя',
      last: 'Манджиев'
    },
    birth: Date.now(),
    page: {
      avatar: 'https://pp.userapi.com/c847122/v847122948/4691d/gRwS4SGn5fY.jpg?ava=1',
      currentInfo: 'Calmik'
    },
    friends: ['000000005']
  }),
  new User({
    _id: getId(),
    name: {
      first: 'Марина',
      last: 'Граф'
    },
    birth: Date.now(),
    page: {
      avatar: 'https://pp.userapi.com/c840433/v840433540/43fc0/pATMD8bRIUw.jpg?ava=1',
      currentInfo: 'Hi zyables, i\'m from ingland!'
    },
    friends: ['000000000', '000000006']
  }),
  new User({
    _id: getId(),
    name: {
      first: 'Илья',
      last: 'Блинков'
    },
    birth: Date.now(),
    page: {
      avatar: 'https://pp.userapi.com/c638218/v638218049/7d400/hcV5FfVV5SA.jpg?ava=1',
      currentInfo: 'Web-developer, not web-monkey...'
    },
    friends: ['000000000', '000000001', '000000002', '000000003', '000000004', '000000005']
  })
];

var bootstrap = function () {
  var arrOfPromises = accounts.map(function(account) {
    console.log('Inserting account - ' + account.fullName + '.');

    return account.save()
    .then(function () {
      var wall = new Wall({
        _id: account._id
      });

      return wall.save();
    })
  });

  return Promise.all(arrOfPromises);
};

mongoose.connection.on('open', function () {
  var db = mongoose.connection.db;
  db.dropDatabase()
  .then(function () {
    console.log('Database is dropped.');
    console.log('Inserting users to users-collection.');
  })
  .then(bootstrap)
  .then(function () {
    console.log('Users are inserted.');
    mongoose.disconnect();
  })
  .catch(function (err) {
    if (err) throw err;
  });
});