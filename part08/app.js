/**
 * ルーティング
 */


var UserList = {
  template: '<div>sample</div>',
  data () {
    return {
      users () {
        return []
      },
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('「ページ遷移が行われて、コンポーネントが初期化される前」に読み出されるフック関数です')
    next()
  }
}


var router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>トップページです</div>'
      }
    },
    {
      path: '/users',
      component: {
        template: '<div>ユーザー一覧ページです</div>'
      },
      beforeEnter (to, from, next) {
        // usersに遷移したときだけのフック関数
        // /user?redirect=trueに遷移するときだけトップにリダイレクト
        if (to.query.redirect === 'true') {
          next('/top')
        } else {
          next()
        }
      }
    },
    {
      path: '/user/:userId', // コロンを使ってパターンマッチング
      name: 'user', // nameを指定すれば、router-link :to="{ name: 'user' }"で判別できる({ name: 'user', params: { userId: 123 }})こんな感じで値も渡せる
      component: {
        template: '<div>ユーザーID({{ $route.params.userId }})のページです</div>' // $route.paramsからアクセスできる
      }
    },
    {
      path: '/sample',
      component: UserList,
    }
  ]
})

// グローバルフック関数（全ての遷移前に動く処理）
router.beforeEach(function (to, from, next) {
  if (to.path === '/test') { // /testに遷移しようとしたときトップにリダイレクトしてる
    next('/top')
  } else {
    next()
  }
})

var app = new Vue({
  router: router,
}).$mount('#app')