import LoadVueInfo from './components/VueInfo.vue';

const VueInfo = {
    install(Vue) {
        Vue.component('vue-info', LoadVueInfo);
    },
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueInfo);
}

export default VueInfo;
