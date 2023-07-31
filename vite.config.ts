import { defineConfig, ConfigEnv, UserConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ArcoResolver } from 'unplugin-vue-components/resolvers';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'; // 使用VueSetupExtend
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // 项目根目录
  const root = process.cwd();
  // 环境变量
  const env = loadEnv(mode, root); // 根据当前工作目录中的 `mode` 加载 .env 文件
  return {
    base: env.VITE_BASE_PATH, // 部署时的路径(即打包路径)
    root, // 项目根目录(index.html 文件所在的位置，此处为根目录F:\Vue3\Arco-Admin)
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'), // 设置别名
        '~': resolve(__dirname, 'public') // 设置别名
      }
    },
    plugins: [
      vue(),
      vueSetupExtend({}), // 使用VueSetupExtend
      // 自动全局引入组件
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        imports: ['vue', 'vue-router'],
        dts: 'src/typings/auto-imports.d.ts',
        resolvers: [ArcoResolver()]
      }),
      Components({
        // 要搜索组件的目录的相对路径
        dirs: ['src/components'],
        // 组件的有效文件扩展名
        extensions: ['vue'],
        // 搜索子目录
        deep: true,
        include: [/\.vue$/, /\.vue\?vue/],
        // 生成自定义 `auto-components.d.ts` 全局声明
        dts: 'src/typings/auto-components.d.ts',
        exclude: [/[\\/]node_modules[\\/]/],
        resolvers: [
          ArcoResolver({
            sideEffect: true
          })
        ]
      })
    ],
    server: {
      host: '0.0.0.0', // 设置服务器启动的 IP
      port: 8848, // 设置服务器启动的端口号
      open: true, // 设置服务器启动时是否自动打开浏览器
      cors: true, // 允许跨域
      https: false // 是否开启 https
    }
  };
});
