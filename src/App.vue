<template>
  <div class="bg-teal-100 min-h-screen">
    <div class="font-sans ">
      <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span class="font-semibold text-xl tracking-tight">Trip Split</span>
        </div>
        <div class="block sm:hidden">
          <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div class="text-sm sm:flex-grow">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <router-link to="/">Home</router-link>
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <router-link to="/tip">Tip</router-link>
            </a>
          </div>
        </div>
      </nav>
      <div class="container mx-auto my-1 md:my-5">
        <div class="bg-white rounded-lg  border border-gray-400 p-2 md:p-4 px-3 py-5 md:py-10 bg-gray-200 flex justify-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .formSmParent{
    @apply w-full max-w-md
  }
  @screen md {
    .formSmParent{
      @apply max-w-sm
    }
  }
  .formSm{
    @apply bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4
  }
  .shadowInput{
    @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
  }
  .shadowInput :focus{
    @apply outline-none shadow-outline
  }
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

  export default {
    data: function () {
      return {
        open: false,
      }
    },
    methods: {
      toggle() {
        this.open = !this.open
      }
    }
  };
</script>
