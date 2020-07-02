<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="valDiv">
      {{label}}
    </label>
    <div class="flex items-center border-b border-b-2 border-teal-500 py-2" id="valDiv">
      {{val}}
    </div>
  </div>
</template>

<style>
  input {
    @apply appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight
  }
</style>

<script>
export default {
  name: 'DisplayOnlyValue',
  props: {
    val: Number,
    label: String
  }
}
</script>

