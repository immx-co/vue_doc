const Counter = {
  data() {
    return {
      counter: 0
    }
  }
}
  
Vue.createApp(Counter).mount('#hello-vue')

console.log('Я запустился!');