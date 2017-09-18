export default [
  {
    title: 'A',
    items: [
      { title: '1' },
      { title: '2' },
      { title: '3' }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {
    title: 'B',
    items: [
      { title: '1' },
      { title: '2' }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {
    title: 'C'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {
    title: 'D',
    items: [
      { title: '1' },
      {
        title: '2',
        items: [
          { title: 'a' },
          { title: 'b' }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
        ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
