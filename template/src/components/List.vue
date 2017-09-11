<template>
  <ul class = 'list'>
    <list-item
      v-for = '(item, index) in items'
      :key = 'index'
      :item = 'item'
      v-bind = '$props'
    ></list-item>
  </ul>
</template>

<script>
  import ListItem from './ListItem'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  export default {
    props: ['items', 'cool'],

    components: {
      ListItem{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
