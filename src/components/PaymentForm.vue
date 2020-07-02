<template>
    <div class="md:flex md:items-center mb-6">
        {{pgTitle}}
    </div>

</template>

<style>
    input {
        @apply appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight
    }
</style>

<script>
    export default {
        data: function () {
            return {
                form:{'id' : 0, 'desc' : '', 'amount' : ''},
            }
        },
        name: 'PaymentForm',
        computed: {
            idAndAmountOwes () {
                return this.$store.getters.idAndAmountOwes
            },
            names () {
                return this.$store.state.names
            },
            pgTitle: function () {
                const usersName = this.names[this.idAndAmountOwes['id']];
                return usersName + ' owes $' + this.formatNumber(this.idAndAmountOwes['owes']);
            },
        },
        methods: {
            storePayment() {
                this.$store.commit('storePayment', this.form)
            }
        }
    }

</script>

