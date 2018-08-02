import config from './config';

var allPromises = [];

allPromises[0] = fetch(config.serverUrl + '/authorized')
.then((res) => res.json())
.then((user) => user);

export default Promise.all(allPromises);