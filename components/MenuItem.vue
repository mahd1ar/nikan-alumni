<template>
  <li :class="{ 'menu-item': true, 'menu-item-has-children': menu.hasSubmenu }">
    <a href="#">{{ menu.title }}</a>
    <ul v-if="menu.hasSubmenu" class="sub-menu">
      <menu-item
        v-for="(m, index) in menu.submenu"
        :key="index"
        :menu="m"
      ></menu-item>
    </ul>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'MenuItem',
  props: {
    menu: { type: Object, default: () => {} },
  },
})
</script>
