<template>
<div></div>
</template>

<script>
export default {
  name: 'Logout',
  created () {
    const api = '//198.177.122.149/cafe/chat/public/api/auth/logout'
    this.$http.post(api).then(response => {
      localStorage.removeItem('JWT_TOKEN')
      this.$router.push('/login')
    })
  }
}
</script>
