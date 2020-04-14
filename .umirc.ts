import { defineConfig } from 'umi';
const publicPath = './';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  publicPath,
  locale: { antd: true },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/products', component: '@/pages/products' },
  ],
});
