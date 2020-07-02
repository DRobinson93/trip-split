<template>
    <div class="formSmParent">
        <div v-if="!showPaymentForm">
            <form class="formSm">
              <InlineTxtWSave label="Name" :index="0" @save="updateName"/>
              <InlineTxtWSave label="Name 2" :index="1" @save="updateName"/>
            </form>
        </div>
        <div v-else>
            <PaymentForm/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import PaymentForm from '@/components/PaymentForm.vue'
import InlineTxtWSave from '@/components/InlineTxtWSave.vue'

export default {
  name: 'Home',
    components:{
        InlineTxtWSave, PaymentForm
    },
    computed: {
        showPaymentForm() {
            return this.$store.state.names.length > 1;
        },
    },
  methods: {
    updateName(index, value) {
      this.$store.commit('updateName', {val:value, index:index})
    },
  }
}
</script>
