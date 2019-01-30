/**
 * Vueコンポーネント
 *    props と event
 *      親コンポーネントから子コンポーネントに値を渡すにはprops
 *      子コンポーネントから親コンポーネントに値を渡すにはevent
 */

// 子コンポーネントから親コンポーネントに値を渡すにはevent
var counterButton = Vue.extend({
  template: '<span>{{ count }}個<button v-on:click="addToCart">追加</button></span>',
  data () {
    return {
      count: 0,
    }
  },
  methods: {
    addToCart () {
      this.count++
      this.$emit('increment') // incrementカスタムイベントを発火
    }
  }
})

// 親コンポーネントから子コンポーネントに値を渡すにはprops
Vue.component('fruits-item-name', {
  template: '<span>{{ fruitsItem.name }}</span>',
  props: {
    fruitsItem: { // テンプレートではケバブケース、HTMLはハイフンつなぎ
      type: Object, // 型
      required: true, // 必須
    }
  }
})

new Vue({
  el: '#fruits-component',
  components: {
    'counter-button': counterButton,
  },
  data: {
    total: 0,
    fruitsItems: [
      { name: 'いちご' },
      { name: 'ぶどう' },
    ]
  },
  methods: {
    incrementCartStates () {
      this.total += 1
    }
  }
})
