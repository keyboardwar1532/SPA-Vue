<template>
  <form id="newproductform">
      <p>
        <label for="name">Useremail</label>
        <input type="text" name="email" id="email" v-model="email">
      </p>

      <p>
        <label for="Password">Password</label>
        <input type="text" name="password" id="password" v-model="password">
      </p>
      <button type="button" @click="login_auth">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login_auth: function () {
      const api = '//198.177.122.149/cafe/chat/public/api/auth/login'
      this.$http.post(api, {email: this.email, password: this.password}).then(response => {
        console.log(response.data.token)
        localStorage.setItem('JWT_TOKEN', response.data.token)
        this.$router.push('/')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
