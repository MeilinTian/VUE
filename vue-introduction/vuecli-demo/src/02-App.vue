<template>
  <div>
      <h1> {{msg}} </h1>
      <button @click="btn">R</button>
      <hr>
      <input type="text" v-model="username">
  </div>
</template>

<script>
export default {
    data(){
        return {
            msg: 'hello world',
            username: ''
        }
    },
    methods: {
        btn() {
            let arr = this.msg.split('')
            arr.reverse()
            this.msg = arr.join('')
        }
    }
}
</script>

<style>

</style>