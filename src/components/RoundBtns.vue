<template>
    <div class="pl-1">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="round">
            Round
        </label>
        <div class="flex items-center  py-2">
            <button type="button" class="btn-l" @click="btnClick(1)">Down</button>
            <button type="button" class="btn-r" @click="btnClick(0)">Up</button>
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
        methods: {
            btnClick(down) {
                this.$emit(down ? 'down' : 'up');
            },
        },
        props: {
            val: Number,
            label: String
        }
    }
</script>

