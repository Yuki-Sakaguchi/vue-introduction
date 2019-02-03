/**
 * 実践的なコンポーネント
 *    - slot
 */

// slotタグを使えばデフォルトの要素を用意しつつ
// コンポーネントを使う際にごそっと入れ替えることができる
// 使い側は[slot="name"] = <slot name="name">という感じで使う
var headerTemplate = `
  <div style="color: gray;">
    <slot name="header">No title.</slot>
  </div>
`

var contentTemplate = `
  <div style="color: gray;">
    <slot name="content">No contents.</slot>
  </div>
`

Vue.component('page-header', {
  template: headerTemplate,
})

Vue.component('page-content', {
  template: contentTemplate,
})

new Vue({
  el: '#fruits-list',
})