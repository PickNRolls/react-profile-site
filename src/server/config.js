module.exports = {
  mongo: {
    uri: 'mongodb://127.0.0.1:27017/react_vk',
    options: {
      useNewUrlParser: true
    }
  },
  session: {
    secret: 'pip i django --unique',
    key: 'sid',
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: null
    }
  }
};