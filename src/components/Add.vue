<template>
  <form>
      <p>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="title">
      </p>

      <p>
        <label for="body">Content</label>
        <input type="text" name="body" id="body" v-model="body">
      </p>
      <p>
        <label for="body">Category</label>
        <input type="text" name="category_id" id="category_ic" v-model="category_id">
      </p>
      <button type="button" @click="add_question">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      title: null,
      body: null,
      category_id: null
    }
  },
  created () {
    const api = '//198.177.122.149/cafe/chat/public/api/category'
    this.$http.get(api).then(response => {
      console.log(response)
    })
  },
  methods: {
    add_question: function () {
      const api = '//198.177.122.149/cafe/chat/public/api/question'
      this.$http.post(api, {title: this.title, body: this.body, category_id: this.category_id}).then(response => {
        console.log(response)
      })
    }
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
