import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import Vuex from 'vuex'
import 'es6-promise/auto'
import Notifications from 'vue-notification'

Vue.use(Vuex);
Vue.use(Notifications)

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
      let copy = state.payments;
      copy.push({'id' : payload.id, 'desc' : payload.desc, 'amount' : payload.amount});
      Vue.set(state, 'payments', copy);
    },
  },
  actions: {},
  getters: {
    userPayments: (state) => (id)  => {
      return state.payments.filter(p => parseInt(p.id) === parseInt(id))
    },
    //these states are not updated but userPayments is
    userPaymentsSum: (state,getters) => (id)  => {
      let total = 0;
      let payments = getters.userPayments(id);
      let i = 0;
      if(payments === undefined)
        return 0;
      while (i < payments.length) {
        total += payments[i]['amount'];
        i++;
      }
      return total;
    },
    idAndAmountOwes : (state, getters) => {
      let user1Sum = getters.userPaymentsSum( 0);
      let user2Sum = getters.userPaymentsSum(1);
      //if user 2 owes money
      if(user1Sum > user2Sum){
        return {id:1, owes:(user1Sum-user2Sum)/2}//divide by 2 since everything is split
      }
      else{
        return {id:0, owes:(user2Sum-user1Sum)/2}//divide by 2 since everything is split
      }
    }
  }
});
Vue.mixin({
  data: function(){
    return {
      numbPattern:'^\\d*(\\.\\d{0,2})?$',
    }
  },
  methods: {
    success: function(txt){
      this.$notify({
        group: 'foo',
        title: 'Notification',
        text: txt,
        type: 'success'
      });
    },
    error: function(txt){
      this.$notify({
        group: 'foo',
        title: 'Notification',
        text: txt,
        type: 'warn'
      });
    },
    formatNumber: function(num){
      return Math.round(num * 100) / 100;
    },
  },
  computed: { //todo is this needed? can hyou just call the getter ?
    idAndAmountOwes: function () {
      return store.getters.idAndAmountOwes;
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
