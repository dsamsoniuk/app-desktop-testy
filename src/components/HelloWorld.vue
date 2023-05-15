<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <h1>Akcja lokalna: {{ count }}</h1>
      <button @click="count++" class="btn btn-success">Dodaj</button>

      <p>Wiadomosc: {{ message }}</p>
      <input v-model="message" placeholder="edit me" class="form-control" />

      <button @click="zapisz" class="btn btn-primary">Zapisz wiadomosc do pamiecie</button>
      <br/>---Po ponownym uruchomieniu aplikacji wiadomosc nadal bedzie widoczna


      <hr/>
      lista zwierzat:
      <ul id="example-1">
        <li v-for="item in animals" :key="item._id">
          {{ item.text }}
        </li>
      </ul>


      <button @click="fetchCatFacts" class="btn btn-primary">Pobierz axios</button>
      <button @click="deleteAnimal" class="btn btn-danger">Usun</button>

  </div>
</template>

<script>
// import Car from "../models/Car"
import LocalStoreHelper from "../helpers/LocalStoreHelper"
import axios from 'axios'

export default {
  name: 'HelloWorld',

  data() {
    return {
      count: 0,
      message: '-',
      infos:['ss'],
      animals: [],
      localStoreHelper: new LocalStoreHelper(),
    }
  },
  props: {
    msg: String,
  },
  mounted() {
    if (localStorage.name) {
      this.message = localStorage.name;
    }

    if (localStorage.animals) {
      this.animals =  this.localStoreHelper.getItemFromString('animals');
    }
    console.log(localStorage)

  },
  methods: {
    deleteAnimal() {
      this.animals.pop();
      localStorage.setItem('animals', JSON.stringify(this.animals) )
    },
    async fetchCatFacts() {
      try {
        let res =  await axios.get('https://cat-fact.herokuapp.com/facts/random?amount=5');
        console.log(res)
        if (res.status == 200) {
          this.localStoreHelper.setItemToString('animals', res.data)
          this.animals = this.localStoreHelper.getItemFromString('animals')
        }
      }
      catch(err) {
        console.log(err)
      }

      },
    zapisz() {
      // `this` inside methods points to the current active instance
      localStorage.name = this.message;
      // localStorage.infos = [2,3,5,6,7];
      // let io = localStorage.infos
      // localStorage.infos = io.push('sss')
      // let carList = JSON.parse(localStorage.getItem('Car'))
      // for (let i in carList) {
      //   console.log(new Car(carList[i]))
      // }
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
