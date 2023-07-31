// Arco Design
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import type { App } from 'vue';

export function setupArco(app: App<Element>) {
  app.use(ArcoVue);
}
