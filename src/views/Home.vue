<template>
  <div>
    <h1>home page</h1>
    <el-button @click="test" type="primary">Api Test</el-button>
    <test-global></test-global>
  </div>
</template>

<script>
import request from 'utils/request'
export default {
  name: 'Home',
  methods: {
    async test() {
      const user = await request.get('/users')
      console.log(user)
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: $--color-success;
}
</style>
