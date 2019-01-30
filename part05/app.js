/**
 * Vueコンポーネント
 *    propsとevent以外のアクセス
 *      $parent
 *      $children
 *      $refs
 * 
 *    基本的にはpropsとeventで対応すること。
 *    どうしても対応できない場合のみ、これらを使う
 */

// $parent
Vue.component('fruits-name', {
  template: '<p>{{ this.$parent.fruits[0].name }}</p>',
  data () {
    return {
      counter: 1,
    }
  }
})

new Vue({
  el: '#fruits-container',
  data: {
    fruits: [
      { name: 'いちご' },
      { name: 'ぶどう' },
    ]
  },
  mounted () {
    // $children
    console.log('子コンポーネントから$children取得した値：' + this.$children[0].counter)
  }
})


// $refs
Vue.component('counter-button', {
  template: '<p>いちご</p>',
  data () {
    return {
      count: 1,
    }
  }
})

var parent = new Vue({
  el: '#fruits-container-2',
  mounted () {
    console.log('子コンポーネントから$refsで取得した値：' + this.$refs.counter.count)
  }
})