import axios from 'axios';
import querystring from 'querystring';

class ApiProvider {
  constructor(token = null) {
    this.baseURL = process.env.REACT_APP_API_URL;
    this.$http = axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest: [
        function(data) {
          return querystring.stringify(data);
        }
      ]
    });
    if (token) this.setToken(token);
  }

  setToken(token = null) {
    if (!token) throw new Error();

    this.token = token;
    this.$http.defaults.headers.common['x-access-token'] = token;
  }

  deleteToken() {
    this.token = null;
    this.$http.defaults.headers.common['x-access-token'] = null;
  }

  isLogged() {
    return !!this.token;
  }

  signup({ email, password }) {
    return this.$http
      .post('/user/signup', {
        email,
        password
      })
      .then(res => res.data);
  }

  signin({ email, password }) {
    return this.$http
      .post('/user/signin', {
        email,
        password
      })
      .then(res => res.data)
      .then(data => this.setToken(data.token));
  }

  getNote() {
    return this.$http.get('/note').then(res => res.data);
  }

  updateNote(note) {
    return this.$http.put('/note', { data: note }).then(res => res.data);
  }
}

export default new ApiProvider();
