const vm = Vue.createApp({
  data() {
    return {
      firstName: "Beth",
      lastName: "Novey",
    };
  },
  methods: {
    fullName(){
        return`${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`
    }
  },
}).mount("#app");



// setTimeout(() => {
//     vm.firstName = "minthu"
    
// }, 2000);

// Vue.createApp({
//     data(){
//         return {
//             firstName:'Beth',
//             lastName: 'Novey'
//         }
//     }
// }).mount('#app1')
