import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://191.52.62.200:8080',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/certificacoes/')
  }
}
