/**
 * Vue基本
 */
var items = [
  {
    name: '鉛筆',
    price: 300,
    quantity: 0,
  },
  {
    name: 'ノート',
    price: 400,
    quantity: 0,
  },
  {
    name: '消しゴム',
    price: 500,
    quantity: 0,
  },
]

var vm = new Vue({
  el: '#app',

  // データ
  data: {
    items: items,
  },

  // メソッド
  methods: {
    doBuy: function (e) {
      alert(this.$options.filters.numberWithDelimiter(this.totalPriceWithTax) + '円のお買い上げ！\nありがとうございます！')
      this.items.forEach(function (item) {
        item.quantity = 0
      })
    },
  },

  // 文字列にフォーマットをかける関数
  filters: {
    numberWithDelimiter: function (value) {
      return value ? value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,') : '0'
    },
  },

  // dataそのものに処理を加えたものをプロパティとして扱える関数
  computed: {
    totalPrice: function () {
      return this.items.reduce(function (sum, item) {
        return sum + (item.price * item.quantity)
      }, 0)
    },
    totalPriceWithTax: function () {
      return Math.floor(this.totalPrice * 1.08)
    },
    canBuy: function () {
      return this.totalPrice >= 1000
    },
    errorMessageClass: function () {
      return {
        error: !this.canBuy
      }
    },
    errorMessageStyle: function () {
      return {
        border: this.canBuy ? '1px solid black' : '1px solid red',
        color: this.canBuy ? '' : 'red',
        padding: '10px 20px',
      }
    },
  },

  beforeCreate: function () {
    console.log('beforeCreate; 「インスタンスが生成され、データが初期化される前」に動く処理')
  },
  /**
   * DOMにマウントされる前なのでDOMの操作はできない
   * WebAPIと通信したりするのはこのタイミング
   */
  created: function () {
    console.log('created: 「インスタンスが生成され、データが初期化された後」に動く処理')
  },
  beforeMount: function () {
    console.log('beforeMount: 「インスタンスがDOM要素にマウントされる前」に動く処理')
  },
  /**
   * DOMにマウントされた後なのでDOMにアクセスできるのでイベントリスナーの登録はここでやる
   */
  mounted: function () {
    console.log('mounted: 「インスタンスがDOM要素にマウントされた後」に動く処理')
  },
  beforeUpdate: function () {
    console.log('beforeUpdate: 「データが変更され、DOMに適用される前」に動く処理')
  },
  updated: function () {
    console.log('updated: 「データが変更され、DOMに適用された後」に動く処理')
  },
  /**
   * イベントリスナーの破棄、タイマーの解除などの後始末はここでやる
   * 
   */
  beforeDestroy: function () {
    console.log('beforeDestroy: 「Vueインスタンスが破棄される前」に動く処理')
  },
  destroyed: function () {
    console.log('destroyed: 「Vueインスタンスが破棄された後」に動く処理')
  },
})
