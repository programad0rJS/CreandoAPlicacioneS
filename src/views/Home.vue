<template>
  <div class="home">
    <Youtube  />
    <Facebook />
  </div>
</template>

<script>


import Youtube from './Youtube.vue';
import Facebook from './Facebook.vue'

export default {
  name: 'Home',

  components: {
    Youtube,
    Facebook
 
  }
}
</script>
