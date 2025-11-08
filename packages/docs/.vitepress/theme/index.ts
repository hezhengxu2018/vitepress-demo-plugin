// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme';
import './style.scss';
import ElementPlus from 'element-plus';
import { VitepressEpDemoBox } from "vitepress-demo-plugin";
import 'element-plus/dist/index.css';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.component('VitepressEpDemoBox', VitepressEpDemoBox)
  },
};
