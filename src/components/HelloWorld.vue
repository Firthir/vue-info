<template>
    <div class="hello">
        <h1>Welcome to Vue Info Tooltip plugin</h1>
        <p>Need a simple tooltip on hover for action buttons and links to add better UX.</p>

        <h3>Install</h3>
        <ul>
            <li><code>npm install vue-info</code></li>
            <li><code>yarn add vue-info</code></li>
        </ul>
        <h3>How to configure / customize this plugin</h3>
        <ul>
            <li>
                Wrap the button or link add as child of vue-info component - Accepts single html element or a component<br />
                required
            </li>
            <li>
                info="Tooltip info message or dresription" <br />
                required
            </li>
            <li>
                color="choose one -> 'white', 'black', 'red'" <br />
                default white text black background.
            </li>
            <li>
                position="choose one -> 'left', 'right', 'top', 'bottom'" <br />
                default top
            </li>
            <li>
                rounded="true/false" <br />
                default true
            </li>
            <li>
                hover="true/false" <br />
                default true
            </li>
        </ul>
        <h3>Ecosystem</h3>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: block;
    margin: 10px;
}
a {
    color: #42b983;
}
</style>
