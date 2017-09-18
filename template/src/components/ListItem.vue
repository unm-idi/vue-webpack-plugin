<template>
  <li class = 'list-item'>
    <span v-if = 'item.items && item.items.length'>
      <div @click = 'toggleState' class = 'expandable-list-item'>
        <i :class = '["fa", icons[1]]' v-if = 'expanded'></i>
        <i :class = '["fa", icons[0]]' v-else></i>
        \{{ item.title }}
      </div>
      <list
        :items = 'item.items'
        v-bind = '$props'
        v-if = 'this.expanded'
      ></list>
    </span>
    <span v-else>\{{ item.title }}</span>
  </li>
</template>

<script>
  import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  import List from './List'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  export default {
    name: 'list-item',

    props: ['item', 'icons'],

    data{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
      return {
        expanded: false{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },

    components: {
      List{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },

    methods: {
      toggleState{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
        this.expanded = !this.expanded{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },

    // manually include recursive list component after child has been created
    created{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
      this.$options.components.list = Vue.extend(List){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
