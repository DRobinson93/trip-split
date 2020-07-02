<template>
    <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/4">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                {{label}}
            </label>
        </div>
        <div class="md:w-1/2">
            <input class="shadowInput"
                   id="inline-full-name" type="text" v-model="textVal">
        </div>
        <div class="md:w-1/4">
            <button type="button" class="btn-r" @click="save">Save</button>
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
        data: function () {
            return {
                textVal:'',
            }
        },
        methods: {
            save() {
                this.$emit('save', this.index, this.textVal);
            },
        },
        props: {
            label: String,
            index: Number
        }
    }
</script>

