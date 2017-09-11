# {{ name }}

> {{ description }}

See a working [demo](https://unm-idi.gitlab.io/{{ name }}/).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build demo (used to prepare for gitlab pages)
npm run build:demo
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```
