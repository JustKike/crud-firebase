<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <UserCreate></UserCreate>
    <UserList></UserList>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCreate from '@/components/UserCreate.vue'
import UserList from '@/components/UserList.vue'

export default {
  name: 'Home',
  components: {
    UserCreate,
    UserList
  }
}
</script>
