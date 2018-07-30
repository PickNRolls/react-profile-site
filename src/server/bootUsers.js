var User = require('./models/user');
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
      first: 'Серега',
      last: 'Симонов'
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
      first: 'Серега',
      last: 'Симонов'
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
      first: 'Серега',
      last: 'Симонов'
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
      first: 'Серега',
      last: 'Симонов'
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
      first: 'Серега',
      last: 'Симонов'
    },
    birth: Date.now(),
    page: {
      avatar: 'https://pp.userapi.com/c840433/v840433540/43fc0/pATMD8bRIUw.jpg?ava=1',
      currentInfo: 'Hi zyables, i\'m from ingland!'
    },
    friends: ['000000000', '_admin']
  })
];