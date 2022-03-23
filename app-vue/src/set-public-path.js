import { setPublicPath } from 'systemjs-webpack-interop';
if (process.env.STANDALONE_SINGLE_SPA) {
  setPublicPath('@app/vue');
}