const api = process.env.REACT_APP_VOTING || 'http://localhost:5001';

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll = () =>
  fetch(`${api}/polls`, { headers })
    .then(res => res.json())
    .then(data => data.contacts)

export const create = (body) =>
  fetch(`${api}/polls`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())