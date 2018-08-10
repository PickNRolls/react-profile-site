import config from '../config';

function getUser (id) {
  return fetch(`${config.serverUrl}/users/${id}`)
  .then((res) => {
    return res.json();
  })
  .catch(err => {
    throw err;
  });
}

function getWall (id) {
  return fetch(`${config.serverUrl}/users/${id}/wall`)
  .then((res) => {
    return res.json();
  })
  .catch(err => {
    throw err;
  });
}

function getFriends (id) {
  return fetch(`${config.serverUrl}/users/${id}/friends`)
  .then((res) => res.json())
  .catch((err) => {
    if (err) throw err;
  });
}

export default {
  getUser,
  getWall,
  getFriends
}