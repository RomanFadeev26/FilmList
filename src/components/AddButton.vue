<template>
    <button class="button is-link addBtn" v-on:click.prevent="addFilmToWatch">Добавить в список</button>
</template>

<script lang="ts">
import Vue from 'vue';
import addFilmToWatch from '@/api/addFilmToWatch';
export default Vue.extend({
    props: {
        name: String,
        refresh: Function,
    },
    methods: {
        async addFilmToWatch() {
            await addFilmToWatch(this.name);
            await this.refresh();
        },
    },
});
</script>

<style>
.addBtn {
    margin-top: 25px; 
}

@media screen and (max-width: 400px) {
    .addBtn {
        width: 100%; 
    }
}
</style>

