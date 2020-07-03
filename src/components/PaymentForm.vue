<template>
    <div class="">
        <h1 class="text-4xl p-4 font-black">{{pgTitle}}</h1>
        <form class="formSm">
            <h2 class="text-lg">New Payment</h2>
            <div class="mb-4">
                <select class="custSelect" @change="handleNameChange">
                    <option v-for="(name, index) in names"
                            :key="index" :value="index">{{name}}</option>
                </select>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="totalWithoutTip">
                    Amount $
                </label>
                <input class="shadowInput"
                       id="totalWithoutTip" :pattern="numbPattern" type="number" step="0.01"
                       placeholder="Amount $" v-model.number="form.amount">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="desc">
                    Description
                </label>
                <input class="shadowInput"
                       id="desc" :pattern="numbPattern" type="text"
                       placeholder="Description" v-model="form.desc">
            </div>
            <button type="button" @click="storePayment"
                    class="btn-elevated">
                Submit
            </button>
        </form>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                form:{'id' : 0, 'desc' : '', 'amount' : ''},
            }
        },
        name: 'PaymentForm',
        computed: {
            names () {
                return this.$store.state.names
            },
            pgTitle: function () {
                const usersName = this.names[this.idAndAmountOwes['id']];
                return usersName + ' owes $' + this.formatNumber(this.idAndAmountOwes['owes']);
            },
        },
        methods: {
            handleNameChange(event){
                this.form.id = event.target.value;
            },
            storePayment() {
                if(this.form.amount === '' || this.form.description === ''){
                    this.error('Please fill out all inputs in the form')
                    return;
                }
                this.$store.commit('storePayment', this.form)
            },
            //set the id to who should pay next
            setFormId(){
                this.form.id = this.idAndAmountOwes['id'];
            }
        }
    }

</script>

