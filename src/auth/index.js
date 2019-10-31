import {router} from '../index'

const API_URL = 'http://198.177.122.149/cafe/chat/public/'

export default {
  user: {
    authenticated: false
  },
  login (context, creds, redirect) {
    var url = API_URL + '/api/auth/login'

    context.$http.post(url, creds)
      .then((res) => {
        localStorage.setItem('id_token', res.token)
        this.user.authenticated = true
        console.log('Login successfully', res.token)
        if (redirect) {
          router.go(redirect)
        }
      })
      .catch((err) => {
        console.log(err)
        context.error = err.data
      })
  },
  signup (context, creds, redirect) {
    var url = API_URL + '/api/auth/signup'

    context.$http.post(url, creds)
      .then((res) => {
        localStorage.setItem('id_token', res.token)
        this.user.authenticated = true

        if (redirect) {
          router.go(redirect)
        }
      })
      .catch((err) => {
        console.log(err)
        context.error = err.data
      })
  },
  logout () {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },
  check () {
    /**
     * 這邊只是單純示範，您不該在驗證邏輯單純只判斷是否有 token
     */
    var jwt = localStorage.getItem('id_token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}