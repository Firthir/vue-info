import VueInfo from './components/VueInfo.vue';

const VueInfoSimple = {
    install(Vue) {
        Vue.component('vue-info', VueInfo);
    },
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueInfoSimple);
}

export default VueInfoSimple;
