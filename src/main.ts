/*
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-08-09 16:02:01
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-08-09 16:44:45
 * @FilePath: /vue3/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import Antd from 'ant-design-vue';
import App from './App.vue'
import 'ant-design-vue/dist/reset.css';

createApp(App).use(Antd).mount('#app')
