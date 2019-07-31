<template lang="pug">
  .eg-slideshow
    slide
      h1 MOF.JS Study Group #1
      h2 Introduction to Vue.js
    slide
      h1 Apa itu Vue.js ?
</template>

<script>
import { Slideshow } from "eagle.js/src/main";

export default {
  mixins: [Slideshow]
};
</script>
