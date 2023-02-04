<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3>{{ obj.name > 18 ? '成年' : '未成年'}}</h3>
    <a @click="one" href="http://www.baidu.com">我是a标签</a>
    <a @click="two(10, $event)" href="http://www.baidu.com">我是a标签</a>
    <a @click.stop="btn" href="http://www.baidu.com">baidu</a>
    <a href="http://www.baidu.com" @click.prevent="btn">.prevent 阻止默认行为</a>
    <button @click.once="btn">.once程序运行期间，只触发一次事件处理函数</button>
    <img :src="imgSrc">
    <p>你要购买商品的数量: {{ count }}</p>
    <button v-on:click="count = count + 1">增加1</button>
    <button v-on:click="addFn">增加1个</button>
    <button v-on:click="addCountFn(5)">一次性增加五件</button>
    <button @click="subFn">减少1个</button>

    <input type="text" @keydown.enter="enterFn">
    <hr>
    <input type="text" @keydown.esc="escFn">
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello, vue',
      imgUrl: '',
      url: 'http://www.baidu.com',
      count: 1,
      obj: {
        name: '小vue',
        age: 5
      }
    }
  },
  methods: {
    one(e) {
      e.preventDefault()
    },
    addFn() {
      this.count++
    },
    addCountFn(num) {
      this.count += num
    },
    subFn() {
      this.count--
    },
    two(num, e) {
      e.preventDefault()
    },
    btn() {
      alert('阻止！')
    },
    enterFn() {
      console.log('huiche')
    },
    escFn() {
      console.log('esc')
    }
  }
}
</script>

<style>

</style>