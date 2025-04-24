<template>
  <div class="">
    <h1>Hello world</h1>
    <h1>Users:</h1>
    <ul>
      <li v-for="user in users" :key="user._id">{{ user.name }} - {{ user.email }}</li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const users = ref([])

    onMounted(async () => {
      const res = await fetch('http://j80o084ko4oogc8w4ggw8kgo.devartist.art/app/users')
      console.log(res);
      users.value = await res.json()
    })

    return { users }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
