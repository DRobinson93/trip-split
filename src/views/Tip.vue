<template>
  <div class="formSmParent">
    <form class="formSm">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="totalWithoutTip">
          Total $
        </label>
        <input class="shadowInput"
               id="totalWithoutTip" :pattern="numbPattern" type="number" step="0.01"
               placeholder="Total $" v-model.number="totalWithoutTip">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="tipPercent">
          Tip %
        </label>
        <div class="flex items-center  py-2" id="tipPercent">
          <button type="button" @click="decTip" class="btn-l">
            -
          </button>
          <div class="border p-4 inline">
            <input type="number" class="w-3/4" v-model.number="tipPercent">
            <span class="float-right">%</span>
          </div>
          <button type="button" @click="incTip" class="btn-r">
            +
          </button>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="w-1/2">
          <DisplayOnlyValue label="+ Tip Amount $" :val="tipAmount" />
        </div>
        <div class="w-1/2">
        <RoundBtns @down="setTipAmount(roundDown(tipAmount))" @up="setTipAmount(roundUp(tipAmount))" />
        </div>
      </div>
      <div class="flex mb-4">
        <div class="w-1/2">
          <DisplayOnlyValue label="= Total $ WITH TIP" :val="totalWithTip" />
        </div>
        <div class="w-1/2">
          <RoundBtns @down="roundTotalDown" @up="roundTotalUp" />
        </div>
      </div>
    </form>
  </div>
</template>

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
        numbPattern:'^\\d*(\\.\\d{0,2})?$',
        tipPercent: 15,
        totalWithoutTip: '',
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
