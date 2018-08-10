import config from '../config';

export function login (data) {
  if (data.username === undefined || data.password === undefined) {
    throw new Error('Api - auth: no data for login');
  }

  return fetch(`${config.serverUrl}/login`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => res.json())
  .catch((err) => {
    if (err) throw err;
  });
};