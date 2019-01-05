<template>
    <div>
      Hello info component<br>
      <button @click="add()">添加</button>
    </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'Info',
  store,
  methods: {
    add() {
      console.log('add Event from Info!');
      store.commit('increase');
    },
  },
};
</script>

<style scoped>

</style>
