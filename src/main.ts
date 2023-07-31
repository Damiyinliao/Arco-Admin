import { createApp } from 'vue';

// Arco Design CSS
import '@arco-design/web-vue/dist/arco.css';
import App from './App.vue';

import { setupRouter } from '@/router';

import { setupArco } from '@/plugin/arco-design';

function bootstrap() {
  // 创建应用
  const app = createApp(App);
  // 配置路由
  setupRouter(app);
  // 配置 Arco Design
  setupArco(app);
  // 挂载应用
  app.mount('#app');
}

bootstrap();
