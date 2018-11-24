<template>
  <div class="home">
    <Films />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Films from '@/components/Films.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    Films,
  },
});
</script>

<style>
.home {
  width: 30%;
  margin: 0 auto;
}
@media screen and (max-width: 400px) {
  .home {
    width: 100%;
  }
}

</style>

