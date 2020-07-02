<template>
  <div class="bg-white rounded-lg  border border-gray-400 p-4 px-3 py-10 bg-gray-200 flex justify-center">
    <div class="w-full max-w-md md:max-w-sm">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="totalWithoutTip">
            Total $
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="totalWithoutTip" type="number" placeholder="Total $" v-model.number="totalWithoutTip">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="tipPercent">
            Tip %
          </label>
          <div class="flex items-center  py-2" id="tipPercent">
            <button type="button" @click="decTip" class="btn-l">
              -
            </button>
            <div class="border p-4">
              {{formatNumber(tipPercent)}}%
            </div>
            <button type="button" @click="incTip" class="btn-r">
              +
            </button>
          </div>
        </div>
        <div class="inline-flex">
          <DisplayOnlyValue label="+ Tip Amount $" :val="tipAmount" />
          <RoundBtns @down="setTipAmount(roundDown(tipAmount))" @up="setTipAmount(roundUp(tipAmount))" />
        </div>
        <div class="inline-flex">
          <DisplayOnlyValue label="= Total $ WITH TIP" :val="totalWithTip" />
          <RoundBtns @down="roundTotalDown" @up="roundTotalUp" />
        </div>
      </form>
    </div>
  </div>
</template>

<style>
  .btn-r {
    @apply bg-green-300 font-bold p-3 rounded-r
  }
  .btn-r :hover{
    @apply bg-green-400
  }
  .btn-l {
    @apply bg-red-300 font-bold p-3 rounded-l
  }
  .btn-l :hover{
    @apply bg-red-400
  }
</style>

<script>
  import DisplayOnlyValue from '../components/DisplayOnlyValue.vue';
  import RoundBtns from '../components/RoundBtns.vue';
  export default {
    name: 'Tip',
    components: {
      DisplayOnlyValue,
      RoundBtns
    },
    data: function () {
      return {
        tipPercent: 15,
        totalWithoutTip: 0,
      }
    },
    methods: {
      roundTotalDown(){
        //decrease tip amount the amount the total needs to go down
        let amount =
                this.tipAmount
                - (this.totalWithTip - this.roundDown(this.totalWithTip));
        this.setTipAmount(amount);
      },
      roundTotalUp(){
        //increase tip amount the amount the total needs to go down
        let amount =
                this.tipAmount
                + (this.roundUp(this.totalWithTip) - this.totalWithTip);
        this.setTipAmount(amount);
      },
      roundDown(num){
        return Math.floor(num);
      },
      roundUp(num){
        return Math.ceil(num);
      },
      formatNumber: function(num){
        return Math.round(num * 100) / 100;
      },
      incTip: function(){
        this.tipPercent++;
        this.tipPercent = this.formatNumber(this.tipPercent);
      },
      decTip: function(){
        this.tipPercent--;
        this.tipPercent = this.formatNumber(this.tipPercent);
      },
      //to set the amount, calc how much percent would make that.. set that and all else is set
      setTipAmount: function(amount){
        //amount = this.formatNumber((this.tipPercent * .01) * this.totalWithoutTip);
        //amount/this.totalWithoutTip = this.tipPercent * .01
        //(amount/this.totalWithoutTip)/.01 = this.tipPercent
        console.log(amount);
        this.tipPercent = (amount/this.totalWithoutTip) * 100;
      },
    },
    computed: {
      tipAmount: function () {
        return this.formatNumber((this.tipPercent * .01) * this.totalWithoutTip);
      },
      totalWithTip: function () {
        return this.formatNumber(this.tipAmount + this.totalWithoutTip);
      }
    }
  }
</script>
