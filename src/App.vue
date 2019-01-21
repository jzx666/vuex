<template>
  <div id="app">
    <h2 @click="addNum">计数器的个数为:{{$store.state.count}}</h2>
    <son></son>
  </div>
</template>

<script>
import son from './components/son'


export default {
  name: 'app',
  components: {
    son
  },
  methods: {
    addNum(){
      this.$store.commit('increment')
    }
  },
}
</script>

<style>
#app {

}
</style>
