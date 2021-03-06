var api = require('./api');
var mongoose = require('./mongoose');


// count = 1;
// Log -> '000000001'

var bootstrap = function () {
  api.createUser({
    authData: {
      username: 'serega',
      password: 'hizyabla'
    },
    name: {
      first: 'Серега',
      last: 'Симонов'
    },
    birth: Date.now(),
    page: {
      avatar: 'https://sun1-8.userapi.com/c834403/v834403654/185217/JKeTnM6ifPI.jpg?ava=1',
      currentInfo: 'Zyables?'
    },
    friends: ['000000000', '000000005', '000000002', '000000003', '000000004', '000000006']
  });

  api.createUser({
    authData: {
      username: 'tolek',
      password: 'hizyabla'
    },
    name: {
      first: 'Анатолий',
      last: 'Овчаренко'
    },
    birth: Date.now(),
    page: {
      avatar: 'https://pp.userapi.com/c848636/v848636320/2cc56/7Hy36GAOEec.jpg?ava=1',
      currentInfo: 'Python is the best!'
    },
    friends: ['000000000', '000000005', '000000002', '000000003', '000000004', '000000006']
  });

  api.createUser({
    authData: {
      username: 'sanya',
      password: 'hizyabla'
    },
    name: {
      first: 'Александр',
      last: 'Проводников'
    },
    birth: Date.now(),
    page: {
      avatar: 'https://pp.userapi.com/c824701/v824701172/ca951/v6lx1KNFh9M.jpg?ava=1',
      currentInfo: 'Basketball is my life'
    },
    friends: ['000000000', '000000001', '000000005', '000000003', '000000004', '000000006']
  });

  api.createUser({
    authData: {
      username: 'daniil',
      password: 'hizyabla'
    },
    name: {
      first: 'Даниил',
      last: 'Чагин'
    },
    birth: Date.now(),
    page: {
      avatar: 'https://pp.userapi.com/c840331/v840331523/88960/VbUEHx2TZbY.jpg?ava=1',
      currentInfo: 'Фриланс говно, а брать деньги у мамы - нет!'
    },
    friends: ['000000000', '000000001', '000000002', '000000005', '000000004', '000000006']
  });

  api.createUser({
    authData: {
      username: 'vitya',
      password: 'hizyabla'
    },
    name: {
      first: 'Витя',
      last: 'Манджиев'
    },
    birth: Date.now(),
    page: {
      avatar: 'https://pp.userapi.com/c847122/v847122948/4691d/gRwS4SGn5fY.jpg?ava=1',
      currentInfo: 'Calmik'
    },
    friends: ['000000000', '000000001', '000000002', '000000003', '000000005', '000000006']
  });

  api.createUser({
    authData: {
      username: 'ilya',
      password: 'hizyabla'
    },
    name: {
      first: 'Илья',
      last: 'Блинков'
    },
    birth: Date.now(),
    page: {
      avatar: 'https://pp.userapi.com/c638218/v638218049/7d400/hcV5FfVV5SA.jpg?ava=1',
      currentInfo: 'Web-developer, not web-monkey...'
    },
    friends: ['000000000', '000000001', '000000002', '000000003', '000000004', '000000006']
  });

  api.createUser({
    authData: {
      username: 'marina',
      password: 'hizyabla'
    },
    name: {
      first: 'Марина',
      last: 'Граф'
    },
    birth: Date.now(),
    page: {
      avatar: 'https://pp.userapi.com/c840433/v840433540/43fc0/pATMD8bRIUw.jpg?ava=1',
      currentInfo: 'Hi zyables, i\'m from ingland!'
    },
    friends: ['000000000', '000000001', '000000002', '000000003', '000000004', '000000005']
  });
};

bootstrap();
setTimeout(function () {
  mongoose.disconnect();
}, 6000);
