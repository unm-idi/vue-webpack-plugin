<template>
  <div id = 'demo'>
    <!-- load font awesome dependency -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <select v-model = 'icons'>
      <option v-for = 'iconSet in iconSets' :value = 'iconSet.icons'>
        \{{ iconSet.name }}
      </option>
    </select>
    <list :items = 'items' :icons = 'icons'></list>
  </div>
</template>

<script>
  import { List } from '../src/index'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  import listData from './listData'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  export default {
    data{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
      return {
        iconSets: [
          { name: 'square', icons: ['fa-plus-square-o', 'fa-minus-square-o'] },
          { name: 'arrow', icons: ['fa-arrow-right', 'fa-arrow-down'] },
          { name: 'chevron', icons: ['fa-chevron-right', 'fa-chevron-down'] }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
        ],
        icons: ['fa-plus-square-o', 'fa-minus-square-o'],
        items: listData{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    components: {
      List{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
