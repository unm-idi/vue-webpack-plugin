// This file will build the plugin

import List from './components/List'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import ListItem from './components/ListItem'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import './styles/plugin.scss'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default List{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export { List, ListItem }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
