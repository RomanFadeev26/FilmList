<template>
<form>
  <input placeholder="Введите название фильма" class="input is-medium" v-model="search" />
  <add-button v-if="filteredFilms.length === 0" v-bind:refresh="getFilmsToWatch" v-bind:name="search"/>
  <list-items v-bind:filteredFilms="filteredFilms" v-bind:removeFilmFromList="removeFilmFromList" />
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import Film from '@/interfaces/film';
import getFilms from '@/api/getFilms';
import AddButton from './AddButton.vue';
import ListItems from './ListItems.vue';
import 'bulma';


export default Vue.extend({
    name: 'Films',
    components: {
      AddButton,
      ListItems,
    },
    data() {
        return {
            search: '',
            films: [{id: '', name: '', watched: false}],
            watchedFilms: [0],
        };
    },
    created() {
        this.getFilmsToWatch();
    },
    methods: {
      getFilmsToWatch(): void {
        getFilms().then((films) => this.films = films);
      },
      removeFilmFromList(index: number): () => void {
            return () => this.filteredFilms.splice(index, 1);
      },
    },
    computed: {
      filteredFilms(): Film[] {
        if (this.search === '') {
          return this.films;
        }
        const searchRegExp: RegExp = new RegExp(this.search);
        return this.films.filter((film): boolean => searchRegExp.test(film.name));
      },
    },
});
</script>

<style>
.input {
  margin-bottom: 25px;
}
</style>

