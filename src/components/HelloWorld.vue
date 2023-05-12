<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <h1>Akcja lokalna: {{ count }}</h1>
      <button @click="count++">Dodaj</button>

      <p>Wiadomosc z pamieci: {{ message }}</p>
      <input v-model="message" placeholder="edit me" />

      <button @click="zapisz">Zapisz wiadomosc do pamiecie</button>
      <br/>---Po ponownym uruchomieniu aplikacji wiadomosc nadal bedzie widoczna

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      count: 0,
      message: '-'
    }
  },
  props: {
    msg: String,
  },
  mounted() {
    if (localStorage.name) {
      this.message = localStorage.name;
    }
  },
  methods: {
    zapisz() {
      // `this` inside methods points to the current active instance
      localStorage.name = this.message;

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
