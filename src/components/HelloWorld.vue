<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <h1>Akcja lokalna: {{ count }}</h1>
      <button @click="count++" class="btn btn-success">Dodaj</button>

      <p>Wiadomosc: {{ message }}</p>
      <input v-model="message" placeholder="edit me" class="form-control" />

      <button @click="zapisz" class="btn btn-primary">Zapisz wiadomosc do pamiecie</button>
      <br/>---Po ponownym uruchomieniu aplikacji wiadomosc nadal bedzie widoczna



      <button @click="download" class="btn btn-primary">Zapisz wiadomosc do pamiecie</button>

  </div>
</template>

<script>
import Car from "../models/Car"
export default {
  name: 'HelloWorld',
  data() {
    return {
      count: 0,
      message: '-',
      infos:['ss']
    }
  },
  props: {
    msg: String,
  },
  mounted() {
    if (localStorage.name) {
      this.message = localStorage.name;
    }

    localStorage.infos = ['aaa','sssss'];
    let car = new Car()
    car.FirstName = 'volkswagen';

    localStorage.setItem('Car', JSON.stringify([
      car, car
    ]));

  },
  methods: {
    download() {

    },
    zapisz() {
      // `this` inside methods points to the current active instance
      localStorage.name = this.message;
      // localStorage.infos = [2,3,5,6,7];
      // let io = localStorage.infos
      // localStorage.infos = io.push('sss')
      let carList = JSON.parse(localStorage.getItem('Car'))
      for (let i in carList) {
        console.log(new Car(carList[i]))
      }
// console.log(JSON.parse('Car'))
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
