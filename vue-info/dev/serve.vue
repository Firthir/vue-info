<script>
import Vue from 'vue';
import VueInfo from '@/vue-info.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueInfo
  }
});
</script>

<template>
  <div id="app">
    <vue-info />
  </div>
</template>
