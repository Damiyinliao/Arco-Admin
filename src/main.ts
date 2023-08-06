import { createApp } from 'vue';

// Arco Design CSS
import '@arco-design/web-vue/dist/arco.css';
import App from './App.vue';

import { setupRouter } from '@/router';

import { setupArco } from '@/plugin/arco-design';

import { setupStore } from '@/store';

function bootstrap() {
  // 创建应用
  const app = createApp(App);
  // 配置路由
  setupRouter(app);
  // 配置 Arco Design
  setupArco(app);
  // 配置状态管理
  setupStore(app);
  // 挂载应用
  app.mount('#app');
}

bootstrap();
