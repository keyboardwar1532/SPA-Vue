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
      <button type="button" @click="edit_question">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'Edit',
  props: ['id'],
  data () {
    return {
      title: null,
      body: null,
      category_id: null,
      question_id: this.$route.params.id
    }
  },
  created () {
    this.get_question()
  },
  methods: {
    edit_question: function () {
      const api = '//198.177.122.149/cafe/chat/public/api/question/' + this.id
      this.$http.put(api, {title: this.title, body: this.body, category_id: this.category_id}).then(response => {
        this.$router.push('/')
      })
    },
    get_question: function () {
      const api = '//198.177.122.149/cafe/chat/public/api/question/' + this.id
      this.$http.get(api).then(response => {
        this.title = response.data.data.title
        this.question_id = response.data.data.question_id
        this.category_id = response.data.data.category_id
        this.body = response.data.data.body
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
