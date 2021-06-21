<template>
    <div id="app">
        <HelloWorld />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    margin: 60px auto;
    max-width: 600px;
}
body {
    background-color: #abe9cd;
    background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
}
</style>
