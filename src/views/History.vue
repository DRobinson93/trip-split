<template>
  <table class="table-auto">
    <thead>
    <tr>
      <th class="px-4 py-2">Name</th>
      <th class="px-4 py-2">Amount</th>
      <th class="px-4 py-2">Description</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(p, index) in payments" :key="index"
        :class="(index % 1 === 0) ? '' : 'bg-gray-100'">
      <td class="border px-4 py-2">{{names[p.id]}}</td>
      <td class="border px-4 py-2">{{p.amount}}</td>
      <td class="border px-4 py-2">{{p.desc}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'History',
    computed: {
      payments: function () {
        return this.$store.state.payments;
      },
      names: function () {
        return this.$store.state.names;
      },
      totalWithTip: function () {
        return this.formatNumber(this.tipAmount + this.totalWithoutTip);
      }
    }
  }
</script>
