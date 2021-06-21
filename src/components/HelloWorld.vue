<template>
    <div class="hello">
        <div class="flex">
            <div class="logo">
                <img src="../assets/logo.svg" alt="Vue info man" />
            </div>
            <div class="intro">
                <h1>Welcome to Vue Info a tooltip plugin for VueJs 2</h1>
                <p>
                    Need a simple tooltip on hover for any action buttons, links, text and more, provide a better UX to your project.
                </p>
            </div>
        </div>

        <div class="space">
            <VueInfo class="space--item" info="Tooltip top">
                <a href="https://firthir.github.io/vue-info/">Link with top info</a>
            </VueInfo>
            <VueInfo class="space--item" info="Tooltip bottom" position="bottom">
                <a href="https://firthir.github.io/vue-info/">Link with bottom info</a>
            </VueInfo>
        </div>
        <div class="space">
            <VueInfo class="space--item space--left" info="Tooltip left" position="left">
                <a href="https://firthir.github.io/vue-info/">Link with left info</a>
            </VueInfo>
            <VueInfo class="space--item space--right" info="Tooltip right" position="right">
                <a href="https://firthir.github.io/vue-info/">Link with right info</a>
            </VueInfo>
        </div>
        <div class="space">
            <VueInfo class="space--item" info="Tooltip white" color="white">
                <a href="https://firthir.github.io/vue-info/">Link with white info</a>
            </VueInfo>
            <VueInfo class="space--item" info="Tooltip right" color="red">
                <a href="https://firthir.github.io/vue-info/">Link with red info</a>
            </VueInfo>
        </div>
        <div class="space">
            <VueInfo class="space--item" info="Tooltip square" square>
                <p>Plain text with square info</p>
            </VueInfo>
        </div>

        <h3>Install</h3>
        <ul>
            <li><code>npm install vue-info</code></li>
            <li><code>yarn add vue-info</code></li>
        </ul>
        <h3>How to configure / customize this plugin</h3>
        <ul>
            <li>
                Wrap the button or link add as child of <strong>vue-info</strong> component - Accepts single html element or a component<br />
                required
            </li>
            <li>
                <strong>info</strong>="Tooltip info message or dresription" <br />
                required
            </li>
            <li>
                <strong>color</strong>="choose one -> 'black', 'white', 'red'" <br />
                default white text black background.
            </li>
            <li>
                <strong>position</strong>="choose one -> 'left', 'right', 'top', 'bottom'" <br />
                default top
            </li>
            <li>
                <strong>Square</strong>="true/false" <br />
                default false, rounded by 6px
            </li>
        </ul>
    </div>
</template>

<script>
import VueInfo from './VueInfo.vue';
export default {
    name: 'HelloWorld',
    components: {
        VueInfo,
    },
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.logo {
    width: 150px;
    margin: 20px 40px;
}

.space {
    padding: 30px;
    display: flex;
    align-content: flex-start;
    justify-content: center;
}
.space--item {
    width: 40%;
    text-align: center;
}
svg {
    color: whitesmoke;
    margin-right: 5px;
}
.space--left {
    text-align: left;
}
.space--right {
    text-align: right;
}
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
    color: black;
    display: block;
    line-height: 1.4;
    background-color: #e7e7e7;
    color: #333;
    border: none;

    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 6px;
}
</style>
