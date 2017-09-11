<template>
  <div id = 'demo'>
    Cool List? <input type = 'checkbox' v-model = 'cool'></input><br>
    <list :items = 'items' :cool = 'cool'></list>
  </div>
</template>

<script>
  import { List } from '../index'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  export default {
    data{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
      return {
        cool: false,
        items: [
          'Squirrel',
          'Gerbil',
          'Rat',
          'Hamster'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
        ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    components: {
      List{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
