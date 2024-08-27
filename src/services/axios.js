import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://192.168.0.113:8080',
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
