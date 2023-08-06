// Arco Design
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import type { App } from 'vue';

import ArcoVueIcon from '@arco-design/web-vue/es/icon/arco-vue-icon';

export function setupArco(app: App<Element>) {
  app.use(ArcoVue);
  app.use(ArcoVueIcon);
}
