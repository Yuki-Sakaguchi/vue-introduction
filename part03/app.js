/**
 * Vueコンポーネント
 *    - グローバルコンポーネント
 *    - ローカルコンポーネント（以下は全てこれ）
 * 
 *    ローカルコンポーネントはコンポーネント（Vueインスタンス）内のコンポーネント
 *    コンポーネント内でしか使えない
 * 
 *    コンポーネントのdataは関数
 *    オブジェクトだとインスタンス全てで同じ値がつかいまわされてしまう。
 *    コンポーネントが設置されたときにdataの初期値のオブジェクトを返す関数というイメージ
 **/

// new Vue({
//   el: '#fruits-list',
//   components: {
//     'fruits-list-title': {
//       template: '<h1>フルーツ一覧</h1>'  
//     }
//   }
// })

var FruitsListTitle = Vue.extend({
  template: '<h1>フルーツ一覧</h1>',
})

var FruitsListList = Vue.extend({
  template: `
    <ul>
      <li v-for="item in fruits">{{ item }}</li>
    </ul>
  `,
  data () {
    return {
      fruits: ['りんご', 'みかん']
    }
  }
})

var vue = new Vue({
  el: '#fruits-list',
  components: {
    'fruits-list-title': FruitsListTitle,
    'fruits-list-list': FruitsListList,
  }
})