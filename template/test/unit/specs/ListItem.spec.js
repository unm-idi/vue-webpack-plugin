import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import ListItem from '@/components/ListItem'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('ListItem.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ListItem){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    const propsData = {
      item: {
        title: 'Item 1'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      },
      icons: ['fa-plus-square-o', 'fa-minus-square-o']{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    const vm = new Constructor({ propsData }).$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    expect(vm.$el.textContent).to.equal('Item 1'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
