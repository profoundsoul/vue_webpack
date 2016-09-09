import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/app.vue';
import routerMap from './router';

Vue.use(VueRouter);

const router = new VueRouter();
routerMap(router);

router.start(App, 'app');