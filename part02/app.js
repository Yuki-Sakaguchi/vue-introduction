/**
 * Vue グローバルコンポーネント（以下は全てこれ）
 * 
 *    - カスタムタグ方式（テンプレートベース）
 *    - サブコンストラクタ方式（コンストラクタベース）
 *
 *    基本的にはカスタムタグ方式で良い
 *    プログラムチックにコンポーネントを扱いたい場合にはコンストラクタベースでやれば良い
 */

/**
 * カスタムタグ方式
 */
Vue.component('fruits-list-title', {
  template: '<h1>フルーツ一覧（テンプレートベース）</h1>',
})

Vue.component('fruits-list-description', {
  template: '<p>季節の代表的なフルーツの一覧です</p>',
})

Vue.component('fruits-list-list', {
  template: `
    <table>
      <tr>
        <th>季節</th>
        <td>フルーツ</td>
      </tr>
      <tr>
        <th>春</th>
        <td>いちご</td>
      </tr>
      <tr>
        <th>夏</th>
        <td>スイカ</td>
      </tr>
      <tr>
        <th>秋</th>
        <td>ぶどう</td>
      </tr>
      <tr>
        <th>冬</th>
        <td>みかん</td>
      </tr>
    </table>
  `,
})

new Vue({
  el: '#fruits-list',
})



/**
 * サブコンストラクタ方式
 */
var FruitsListTitle = Vue.extend({
  template: '<h1>フルーツ一覧（コンストラクタベース）</h1>'
})

// マウントは$mauntを使う
new FruitsListTitle().$mount('#fruits-list-2')
// またはカスタムタグベースに渡す
// Vue.component('fruits-list-title, FruitsListTitle)