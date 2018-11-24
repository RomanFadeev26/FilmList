<template>
    <button class="button is-danger removeBtn" v-on:click.prevent="removeFilmToWatch">Remove</button>
</template>

<script lang="ts">
import Vue from 'vue';
import removeFilmToWatch from '@/api/removeFilmToWatch';
export default Vue.extend({
    props: {
        id: String,
        refresh: Function,
    },
    methods: {
        async removeFilmToWatch() {
            await removeFilmToWatch(this.id);
            this.refresh();
        },
    },
});
</script>

<style>
.removeBtn {
    margin-top: 25px; 
}

@media screen and (max-width: 400px) {
    .removeBtn {
        width: 100%; 
    }
}

</style>
