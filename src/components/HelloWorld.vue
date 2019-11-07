<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container">
        <ul class="nav navbar-nav">
          <li><router-link to="/add">Add_Article</router-link></li>
          <li><router-link to="/logout">Logout</router-link></li>
        </ul>
      </div>
    </nav>
    <table style="width:100%">
      <tr >
        <th>Title</th>
        <th>content</th>
        <th>Created_at</th>
        <th>User</th>
        <th>Action</th>
      </tr>
      <tr v-for="(item, key) in list" :key="item.id">
        <td>{{item.title}}</td>
        <td>{{item.body}}</td>
        <td>{{item.created_at}}</td>
        <td><router-link :to="{ name: 'Edit', params: { id: item.id }}">Edit_article</router-link></td>
        <td><a  href="#" @click="delete_question(key, item.id)">delete_article</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: null
    }
  },
  methods: {
    delete_question: function (key, deleteId) {
      console.log('index', key)
      console.log('deleteId', deleteId)
      const api = '//198.177.122.149/cafe/chat/public/api/question/' + deleteId
      this.$http.delete(api).then(response => {
        this.list.splice(key, 1)
      })
    }
  },
  created () {
    const api = '//198.177.122.149/cafe/chat/public/api/question'
    this.$http.get(api).then(response => {
      this.list = response.data.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
