<template>
    <ul class="listOfFilms">
        <li class="subtitle film" v-for="(film, index) in filteredFilms" v-bind:key="film.id">
          <div v-bind:class="[{ watched: film.watched }, listItem ]" v-on:click="changeFilmState(film)">{{index + 1 + ". " + film.name}}</div>
          <remove-button v-if="filteredFilms.length !== 0" v-bind:refresh="removeFilmFromList(index)" v-bind:id="film.id" />
        </li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import RemoveButton from './RemoveButton.vue';
import addFilmToWatched from '@/api/addFilmToWatched';
import removeFilmFromWatched from '@/api/removeFilmFromWatched';
import Film from '@/interfaces/film';
export default Vue.extend({
    components: {
        RemoveButton,
    },
    props: {
        filteredFilms: Array,
        removeFilmFromList: Function,
    },
    data: () => ({
        listItem: 'listItem',
    }),
    methods: {
        changeFilmState(film: Film): void {
            const { watched } = film;
            if (watched) {
                removeFilmFromWatched(film);
            } else {
                addFilmToWatched(film);
            }
            film.watched = !watched;
        },
    },
});
</script>

<style>
.watched {
    text-decoration: line-through;
}
.listItem {
    cursor: pointer;
}
.film {
    text-align: center;
}
.listOfFilms {
    list-style-type: none;
}
</style>

