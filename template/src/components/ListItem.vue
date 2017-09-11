<template>
  <li class = 'list-item'>
    <span v-if = 'cool'>Cool: </span>\{{ item }}
  </li>
</template>

<script>
  export default {
    props: ['item', 'cool']{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
