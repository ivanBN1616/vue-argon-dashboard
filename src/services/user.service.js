import axios from 'axios';

const API_URL = 'http://35.181.142.34:8080';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + '/obtenirLlistaUsuaris');
  }

  getUserBoard() {
    return axios.get(API_URL + '/obtenirUsuari');
  }
}

export default new UserService();