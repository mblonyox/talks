import Vue from "vue";
import Eagle from "eagle.js/src/main";

import "animate.css";

import Slide from "./Slide.vue";

Vue.use(Eagle);

new Vue({ render: h => h(Slide) }).$mount("#app");
