import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    names: [],
    payments:[]//arr of objects
  },
  mutations: {
    updateName (state, payload) {
      Vue.set(state.names, payload.index, payload.val);
    },
    storePayment (state, payload) {
      state.payments.push({'id' : payload.id, 'desc' : payload.desc, 'amount' : payload.desc});
    },
  },
  getters: {
    userPayments: state => (id)  => {
      return state.payments.filter(payment => payment.id === id)
    },
    userPaymentsSum: (state,getters) => (id)  => {
      let total = 0;
      const payments = getters.userPayments(id);
      let i = 0;
      while (i < payments.length) {
        total += payments[i]['amount'];
        i++;
      }
      return total;
    },
    idAndAmountOwes : (state, getters) => {
      const user1Sum = getters.userPaymentsSum(0);
      const user2Sum = getters.userPaymentsSum(1);
      //if user 2 owes money
      if(user1Sum > user2Sum){
        return {id:1, owes:(user1Sum-user2Sum)}
      }
      else{
        return {id:0, owes:(user2Sum-user1Sum)}
      }
    }
  }
});
Vue.mixin({
  methods: {
    formatNumber: function(num){
      return Math.round(num * 100) / 100;
    },
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
