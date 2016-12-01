import {
  PROTOCOL,
  LOGIN_URL,
  NODE_BASE_URL,
  USER_URL
} from '../constants/networkURLs';

const CURRENT_USER_SHARD = '';

// Authenticate with the FAS
export async function authenticate(email, password) {
  return fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: email,
      password: password
    })
  })
}

// Send auth token to node app
export async function loginToNodeApp(servingDomain, authorizationCode) {
  CURRENT_USER_SHARD = servingDomain;
  return fetch(PROTOCOL + servingDomain + '.app.' + NODE_BASE_URL + '/instantlogin?code=' + authorizationCode + '&servingDomain=' + servingDomain, {
    method: 'GET'
  })
}

// Fetch user model
export async function getUser() {
  return fetch(PROTOCOL + CURRENT_USER_SHARD + '.app.' + USER_URL, {
    method: 'GET'
  })
}
