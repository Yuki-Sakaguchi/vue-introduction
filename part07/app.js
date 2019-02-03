/**
 * ログインコンポーネント
 */

var auth = {
  login (id, pass) {
    window.alert('userid: ' + id + '\n' + 'password: ' + pass)
  }
}

Vue.component('user-login', {
  template: '#login-template',
  data () {
    return {
      userid: '',
      password: '',
    }
  },
  methods: {
    login () {
      auth.login(this.userid, this.password)
    }
  }
})

new Vue({
  el: '#login-example'
})