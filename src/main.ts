import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';
import i18n from '@/lang';

import 'normalize.css';
import ElementUI from 'element-ui';
import SvgIcon from 'vue-svgicon';
import {getSize} from '@/utils/cookies';


Vue.use(ElementUI, {
  size: getSize() ||  'small', // Set element-ui default size  初始尺寸大小
  zIndex: 3000,   // 初始层级
  i18n: (key: string, value: string) => i18n.t(key, value),
});

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
